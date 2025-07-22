import React from "react";

const Login = () => {
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("User Info:");
      console.log("Name:", user.displayName);
      console.log("UserAVATAR:", user.photoURL);
      console.log("Email:", user.email);

      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      };

      const apiResponse = await fetch("http://localhost:9000/api/auth/googlelogin", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!apiResponse.ok) {
        throw new Error("Failed to login");
      }

      const responseData = await apiResponse.json();
      console.log("Login response:", responseData);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div>
      <h1>Google Login Integration</h1>
      <button onClick={googleLogin}>Sign In with Google</button>
    </div>
  );
};

export default Login;

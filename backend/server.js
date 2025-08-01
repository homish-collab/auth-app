const express = require("express");
const app = express();
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
require("dotenv").config();


connectDB();


app.use(express.json());


app.use("/api", authRoutes);  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

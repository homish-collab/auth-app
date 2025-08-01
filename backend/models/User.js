const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  oauthProvider: String,
});
module.exports = mongoose.model("User", UserSchema);

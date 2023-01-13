const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

// const ImageSchema = Schema({
//   name: { type: String, default: null },
//   image: { type: String, default: null },
//   weight: {type : Number, default: null }
// });

const User = mongoose.model("User", UserSchema);

module.exports={User};
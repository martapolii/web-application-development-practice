import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: "Name is required", trim: true },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  created: { type: Date, default: Date.now },
  updated: Date,
  hashed_password: { type: String, required: "Password is required" },
  salt: String,
});

// Virtual field for password
UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt(); // make salt encrypts the password before storing it in the database 
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

export default mongoose.model("User", UserSchema);

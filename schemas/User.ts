import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, maxlength: 50, minlength: 2 },
  lastName: { type: String, maxlength: 50, minlength: 2 },
  email: { type: String, maxlength: 50, minlength: 2 },
});

const User = mongoose.model("User", UserSchema);

export { User };

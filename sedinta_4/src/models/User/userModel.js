import mongoose from "mongoose";
import userSchema from "./userSchema.js";

const User = mongoose.model("User", userSchema, "users");

export default User;

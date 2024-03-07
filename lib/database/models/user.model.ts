import { Schema, model, models } from "mongoose";

export interface Uuser extends Document {
  username: string;
  clerkid: string;
  email: string;
  photo: string;
  firstname?: string;
  lastname?: string;
  planid?: number;
  creditBalance?: number;
}

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstname: String,
  lastname: String,
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", userSchema);

export default User;

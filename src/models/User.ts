import { Schema, model, models, type InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, default: null },
    avatar: { type: String, default: null },
    xp: { type: Number, default: 0 },
    badges: { type: [String], default: [] },
    streak: { type: Number, default: 0 },
    lastStudyDate: { type: Date, default: null },
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;

export default models.User || model("User", userSchema);

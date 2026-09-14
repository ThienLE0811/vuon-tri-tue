import { Schema, model, models, type InferSchemaType } from "mongoose";

const progressSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lessonId: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    completed: { type: Boolean, default: false },
    completedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

progressSchema.index({ userId: 1, lessonId: 1 }, { unique: true });

export type Progress = InferSchemaType<typeof progressSchema>;

export default models.Progress || model("Progress", progressSchema);

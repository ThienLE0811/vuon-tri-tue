import { Schema, model, models, type InferSchemaType } from "mongoose";

export const SUBJECTS = ["toan", "tieng-viet", "tieng-anh"] as const;

const lessonSchema = new Schema(
  {
    subjectId: { type: String, enum: SUBJECTS, required: true },
    grade: { type: Number, min: 1, max: 5, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }, // markdown
    videoUrl: { type: String, default: null },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

lessonSchema.index({ grade: 1, subjectId: 1, order: 1 });

export type Lesson = InferSchemaType<typeof lessonSchema>;

export default models.Lesson || model("Lesson", lessonSchema);

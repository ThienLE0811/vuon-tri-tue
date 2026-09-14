import { Schema, model, models, type InferSchemaType } from "mongoose";

export const QUESTION_TYPES = ["multiple_choice", "fill_blank", "true_false"] as const;

const questionSchema = new Schema(
  {
    type: { type: String, enum: QUESTION_TYPES, required: true },
    content: { type: String, required: true },
    options: { type: [String], default: undefined }, // multiple_choice only
    correctAnswer: { type: Schema.Types.Mixed, required: true }, // string | boolean
    explanation: { type: String, default: "" },
  },
  { _id: true }
);

const exerciseSchema = new Schema(
  {
    lessonId: { type: Schema.Types.ObjectId, ref: "Lesson", required: true },
    title: { type: String, required: true },
    questions: { type: [questionSchema], default: [] },
  },
  { timestamps: true }
);

exerciseSchema.index({ lessonId: 1 }, { unique: true });

export type Exercise = InferSchemaType<typeof exerciseSchema>;

export default models.Exercise || model("Exercise", exerciseSchema);

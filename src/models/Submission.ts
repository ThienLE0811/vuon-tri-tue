import { Schema, model, models, type InferSchemaType } from "mongoose";

const answerSchema = new Schema(
  {
    questionId: { type: Schema.Types.ObjectId, required: true },
    answer: { type: Schema.Types.Mixed, required: true },
    correct: { type: Boolean, required: true },
  },
  { _id: false }
);

const submissionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    exerciseId: { type: Schema.Types.ObjectId, ref: "Exercise", required: true },
    answers: { type: [answerSchema], default: [] },
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

submissionSchema.index({ userId: 1, exerciseId: 1, submittedAt: -1 });

export type Submission = InferSchemaType<typeof submissionSchema>;

export default models.Submission || model("Submission", submissionSchema);

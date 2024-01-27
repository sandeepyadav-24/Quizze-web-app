// Importing Mongoose From Library
import mongoose from "mongoose";

// USEr SCHEMA
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdQuizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }],
});

//  QUESTION SCHEMA
const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOptionIndex: { type: Number },
  answer: { type: String }, // Only for Q&A type quiz
});

// QUIZ Schema

const quizSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  type: { type: String, enum: ["poll", "q&a"], required: true },
  questions: [questionSchema],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  shareable: { type: Boolean, default: true },
  timerEnabled: { type: Boolean, default: false },
  maxQuestions: { type: Number, default: 5 },
  impressions: { type: Number, default: 0 },
});

// ANSWER SCHEMA
const answerSchema = new mongoose.Schema({
  questionIndex: { type: Number, required: true },
  selectedOptionIndex: { type: Number },
});
// Quiz Attempt SChema
const quizAttemptSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  user: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String }, // User name for anonymous attempts
  },
  type: { type: String, enum: ["poll", "q&a"], required: true },
  answers: [answerSchema],
  score: { type: Number },
  timestamp: { type: Date, default: Date.now },
});

// Analytics Schema
const analyticsSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  impressions: { type: Number, default: 0 },
  trending: { type: Boolean, default: false },
});

//MODELS OF USER && Quiz &&
const User = mongoose.model("User", userSchema);
const Quiz = mongoose.model("Quiz", quizSchema);
const QuizAttempt = mongoose.model("QuizAttempt", quizAttemptSchema);
const Analytics = mongoose.model("Analytics", analyticsSchema);

export { User, Quiz, QuizAttempt, Analytics };

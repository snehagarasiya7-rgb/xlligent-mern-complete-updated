import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    text: {
      type: String,
      required: [true, "Review text is required"],
      trim: true,
      maxlength: 2000,
    },
    date: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      enum: ["google", "website", "manual"],
      default: "google",
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);

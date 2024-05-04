import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    identificationPicture: {
      type: String,
    },
    category: {
      type: [String],
      default: [
        "Tennis",
        "Football",
        "Traditional Workout",
        "Jogging",
        "Walking",
        "Hiking",
      ],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Workout = mongoose.Model("Workout", workoutSchema);
export default Workout;

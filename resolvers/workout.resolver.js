import Workout from "../models/workout.model.js";

const workoutResolver = {
  Query: {
    workouts: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");

        const userId = context.getUser()._id;

        const workouts = await Workout.find({ userId: userId });
        return workouts;
      } catch (err) {
        console.error("Error getting workouts", err);
        throw new Error("Error getting workouts");
      }
    },
    workout: async (_, { workoutId }) => {
      try {
        const workout = await Workout.findById(workoutId);

        return workout;
      } catch (er) {}
    },
  },
  Mutation: {
    createWorkout: async (_, { input }, context) => {
      try {
        const newWorkout = new Workout({
          ...input,
          userId: context.getUser()._id,
        });

        await newWorkout.save();
        return newWorkout;
      } catch (err) {
        console.error("Error creating workout", err);
        throw new Error("Error creating workout");
      }
    },
    updateWorkout: async (_, { input }) => {
      try {
        const updatedWorkout = await Workout.findByIdAndUpdate(
          input.workoutId,
          input,
          { new: true }
        );

        return updatedWorkout;
      } catch (err) {
        console.error("Error updating workout", err);
        throw new Error("Error updating workout");
      }
    },
    deleteWorkout: async (_, { workoutId }) => {
      try {
        const deletedWorkout = await Workout.findByIdAndDelete(input.workoutId);

        return deletedWorkout;
      } catch (err) {
        console.error("Error deleting workout", err);
        throw new Error("Error deleting workout");
      }
    },
  },

  // TODO: ADD USER/WORKOUT RELATION
};

export default workoutResolver;

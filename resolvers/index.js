import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver.js";
import workoutResolver from "./workout.resolver.js";

const mergedResolvers = mergeResolvers([userResolver, workoutResolver]);

export default mergedResolvers;

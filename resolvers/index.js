import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./user.resolver";
import { workoutResolver } from "./workout.resolver";

const mergedResolvers = mergeResolvers([userResolver, workoutResolver]);

export default mergeResolvers;

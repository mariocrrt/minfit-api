import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./user.typeDef.js";
import workoutTypeDef from "./workout.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, workoutTypeDef]);

export default mergedTypeDefs;

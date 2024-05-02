const workoutTypeDef = `#graphql
    type Workout {
        _id: ID!
        name: String!
        duration: String!
        identificationPicture: String
    }

    type Query {
        workouts: [Workout!]
        workout(workoutId: ID!): Workout
    }

    type Mutation {
        addWorkoutToList(input: AddWorkoutToListInput!): Workout
        createWorkout(input: CreateWorkoutInput!): Workout
        deleteWorkout: DeleteWorkoutResponse
    }

    input AddWorkoutToListInput {
        name: String!
        duration: String!
    }

    input CreateWorkoutInput {
        name: String!
        duration: String!
        identificationPicture: String
    }

    type DeleteWorkoutResponse {
        message: String!
    }
`;

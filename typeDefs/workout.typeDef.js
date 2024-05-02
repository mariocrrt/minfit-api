const workoutTypeDef = `#graphql
    type Workout {
        _id: ID!
        userId: ID
        name: String!
        duration: String!
        identificationPicture: String
        category: String!
        date: String
    }

    type Query {
        workouts: [Workout!]
        workout(workoutId: ID!): Workout
    }

    type Mutation {
        createWorkout(input: CreateWorkoutInput!): Workout
        updateWorkout(input: UpdateWorkoutInput!): Workout
        deleteWorkout: DeleteWorkoutResponse
    }

    input CreateWorkoutInput {
        name: String!
        duration: String!
        identificationPicture: String
    }

    input UpdateWorkoutInput {
        name: String!
        duration: String!
        identificationPicture: String
    }

    type DeleteWorkoutResponse {
        message: String!
    }
`;

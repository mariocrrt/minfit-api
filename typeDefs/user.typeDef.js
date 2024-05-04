const userTypeDef = `#graphql
    type User {
        _id: ID!
        username: String!
        password: String!
    }

    type Query {
        authUser: User
    }

    type Mutation {
        register(input: RegisterInput!): User
        login(input: LoginInput!): User
        logout: LogoutResponse
    }

    input RegisterInput {
        username: String!
        password: String!
    }

    input LoginInput {
        username: String!
        password: String!
    }

    type LogoutResponse {
        message: String!
    }


`;

export default userTypeDef;

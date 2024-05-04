import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const userResolver = {
  Mutation: {
    signUp: async (_, { input }, context) => {
      try {
        const { username, password } = input;
        if (!username || !password) {
          throw new Error("All fields are required.");
        }

        const existingUser = User.findOne({ username });

        if (existingUser) {
          throw new Error("Username already taken.");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
          username,
          password: hashedPassword,
        });

        await newUser.save();
        await context.login(newUser);
        return newUser;
      } catch (err) {
        console.error("Error in signup", err);
        throw new Error("Internal server error.");
      }
    },

    login: async (_, { input }, context) => {
      try {
        const { username, password } = input;

        const { user } = await context.authenticate("graphql-local", {
          username,
          password,
        });

        await context.login(user);
        return user;
      } catch (err) {
        console.error("Error in login", err);
        throw new Error("Internal server error.");
      }
    },

    logout: async (_, _, context) => {
      try {
        await context.logout();
        req.session.destroy((err) => {
          if (err) throw err;

          res.clearCookie("connect.sid");

          return { message: "Logged out succesfully!" };
        });
      } catch (err) {
        console.error("Error in logout", err);
        throw new Error("Internal server error.");
      }
    },
  },
  Query: {
    authUser: async (_, __, context) => {
      try {
        const user = await context.getUser();
        return user;
      } catch (err) {
        console.error("Error in authUser", err);
        throw new Error("Internal server error.");
      }
    },
  },
};

export default userResolver;

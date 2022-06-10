import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";

import mongoose from "mongoose";
import "dotenv/config";
import { typeDefs } from "./types";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const uri: any = process.env.URI;
console.log(uri)
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

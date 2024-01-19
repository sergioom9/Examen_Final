import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLError } from "graphql";
import mongoose from "mongoose";
import { typeDefs } from "./GQL/typeDefs.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Query } from "./resolvers/query.ts";

try{  // Conexión a la base de datos
   
  
  await mongoose.connect("mongodb+srv://sergioom9:nebrija22@cluster0.9dzkoo1.mongodb.net/?retryWrites=true&w=majority");
  
  // Los resolvers son las funciones que se ejecutan cuando se hace una petición -> Se definen en resolvers/query.ts y resolvers/mutations.ts
  
  const resolvers = { Mutation, Query};
  
  const server = new ApolloServer({
    typeDefs,
    resolvers:{
      Query,
      Mutation
      //resolvers,
      //resolvers
    }

  });
  
  const { url } = await startStandaloneServer(server, {listen: { port: 3000 }}); // Se pone el puerto 3000
  console.log(`Server ready at port 3000`);
}
catch(error){
  console.error(error);
}

import mongoose from 'mongoose';
import 'dotenv/config'
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';

const URI = process.env.MONGO_URI;

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });


  mongoose.connect(URI)
  .then(() => {
    console.log("Mongodb connected");
    return server.listen({port : 8001})
  })
  .then((res) => console.log(`🚀 server running at ${res.url}`));
  

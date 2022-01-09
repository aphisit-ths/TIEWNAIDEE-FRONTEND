import server from "./server";

const express = require("express");

//Strart  Server
const createServer = async () => {
  try {
    
    const app = express();
    await server.start();
    server.applyMiddleware({ app });
    
    app.get("/",(req ,res) =>{
      res.json({result:"ok"})
    })

    app.listen({ port: 4444 }, () =>
      console.log(
        `server ready at http://localhost:4444${server.graphqlPath}`
      )
    );
  } catch (error) {
    console.log(error);
  }
};

createServer();

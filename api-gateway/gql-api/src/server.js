import fs from 'fs'
import path from 'path'

const { ApolloServer } = require('apollo-server-express');
import resolvers from './resolvers/index'
// import typeDefs from './schema/typeDefs'
const typeDefs = fs
.readFileSync(path.join(__dirname, './schema/schema.graphql'),'utf8')
.toString()

const server = new ApolloServer({
    typeDefs,
    resolvers,
})


export default server

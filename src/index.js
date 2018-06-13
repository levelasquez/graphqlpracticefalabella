import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

import { mongo } from './config'
import typeDefs from './schema'
import resolvers from './resolvers'
import models from './models'

const mongoConnect = () => mongoose.connect(mongo.uri)

const server = () => {
  mongoConnect()

  const graphServer = new ApolloServer({ typeDefs, resolvers, context: { models } })

  graphServer.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`))
}

export default server

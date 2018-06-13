import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    friends: [User!]!
  }

  type Mutation {
    addUser(name: String!): User!
    addFriend(myId: ID!, friendId: ID!): User!
  }
`

export default typeDefs

const resolvers = {
  Query: {
    users: (parent, args, context) => {
      if (args.filter) {
        const regex = new RegExp(args.filter, 'i')

        return context.models.User.find({ name: regex })
      }
      return context.models.User.find()
    },
  },
  User: {
    friends(user, args, ctx) {
      const { friends } = user
      const users = ctx.models.User.find({ _id: { $in: friends } })

      return users
    },
  },
  Mutation: {
    addUser: (parent, args, context) => {
      // Some extra logic

      return context.models.User.create(args)
    },
    addFriend: async (parent, args, context) => {
      // Some extra logic
      const { friends = [] } = await context.models.User.findOne({ _id: args.myId })
      const newFriends = [...friends, args.friendId]
      await context.models.User.update(
        { _id: args.myId },
        { friends: newFriends },
      )
      const friend = await context.models.User.findOne({ _id: args.friendId })

      return friend
    },
  },
}

export default resolvers

import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  friends: { type: [] },
})

const userModel = mongoose.model('User', userSchema)

export default userModel

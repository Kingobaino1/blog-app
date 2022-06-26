import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersModel = new Schema({
  name: { type: String, required: true },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});
const User = mongoose.model('User', usersModel)
export default User;

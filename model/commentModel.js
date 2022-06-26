import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentsModel = new Schema({
  comment: { type: String, required: 'Comment is required' },
  date: { type: Date },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  commenter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Comment = mongoose.model('Comment', commentsModel);

export default Comment;

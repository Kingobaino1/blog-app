import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postsModel = new Schema({
    title: {type: String, required: 'Title is required'},
    content: {type: String, required: 'Content is required'},
    created: {type: Date},
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
});

const Post = mongoose.model('Post', postsModel);
export default Post;

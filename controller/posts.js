import Post from '../model/postModel';
import User from '../model/userModel';

const createPost = async(req, res) => {
  const author = await User.findById(req.params.user_id);
  let newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    date: req.body.date,
    author: author._id
  });
  try {
    const data = await newPost.save();
    author.posts.push(data._id);
    await author.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPosts = async(req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export {
  createPost,
  getAllPosts,
}

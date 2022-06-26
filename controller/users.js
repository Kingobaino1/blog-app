import User from '../model/userModel';

const createUser = async(req, res) => {
  const data = new User({
    name: req.body.name,
  });

  try {
    const newUser = await data.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllUsers = async(req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const getOneUser = async(req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const updateUser = async(req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const option = { new: true };
    const userUpdate = await User.findByIdAndUpdate(id, data, option);
    res.status(200).json(userUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async(req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `user with id ${user.id} has been deleted`});
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
}

export {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};

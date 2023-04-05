const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const todos = await Todo.find({});
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todo.findOne({ _id: id });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createNewTask = async (req, res) => {
  try {
    const newTodoData = req.body;
    const todos = await Todo.create(newTodoData);
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const todos = await Todo.findOneAndDelete({ _id: id });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newTodoData = req.body;

    const todos = await Todo.findByIdAndUpdate(_id, { ...newTodoData, _id }, { new: true });
    return res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  deleteTask,
  updateTask,
};
import Task from '../models/Task';

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render('index', {tasks});
}

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
  } catch (error) {
    console.log(error);
  }
  res.redirect('/');
}

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render('edit', {task});
  } catch (error) {
    console.log(error);
  }
}

export const editTask = async (req, res) => {
  try {
    const {id} = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

export const deleteTask = async (req, res) => {
  try {
    const {id} = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}

export const taskToggleDone = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
}
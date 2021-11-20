import {Router} from 'express';

import {
  createTask,
  deleteTask,
  editTask,
  renderTaskEdit,
  renderTasks,
  taskToggleDone,
} from '../controllers/tasks.controller';

const router = Router();

router.get('/', renderTasks);

router.post('/tasks/add', createTask);

router.get('/task/:id/toggleDone', taskToggleDone);

router.get('/task/:id/edit', renderTaskEdit);

router.post('/task/:id/edit', editTask);

router.get('/task/:id/delete', deleteTask);


export default router;
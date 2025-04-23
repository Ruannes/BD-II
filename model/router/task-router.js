import express from 'express'
const TaskRouter = express.Router();

import { getTasks, createTask, findTask, deleteTask, updateTask } from '../controller/task-controller.js';

app.get('/', getTasks);
app.get('/:id', findTask);
app.delete('/:id', deleteTask);
app.patch('/:id', updateTask);
app.post('/', createTask);

export default TaskRouter;
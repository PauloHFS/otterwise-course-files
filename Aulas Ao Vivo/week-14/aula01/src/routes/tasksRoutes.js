import * as TasksController from '../controllers/tasksController.js';

export async function tasksRoutes(fastify) {
  fastify.get('/tasks', TasksController.index);
  fastify.get('/tasks/:id', TasksController.show);
  fastify.post('/tasks', TasksController.create);
}

import * as TasksController from '../controllers/tasksController.js';

export async function tasksRoutes(fastify) {
  fastify.get('/tasks', TasksController.index);
  fastify.get('/users/:id', TasksController.show);
  // fastify.post('/users', UsersController.create);
}

import * as TasksController from '../controllers/tasksController.js';

export async function routes(fastify) {
  fastify.get('/tasks', TasksController.index);
  /* fastify.get('/users/:id', UsersController.show);
  fastify.post('/users', UsersController.create); */
}

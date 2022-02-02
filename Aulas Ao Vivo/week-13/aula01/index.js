import Fastify from 'fastify';
import { tasksRoutes } from './routes/tasksRoutes.js';

const fastify = Fastify({
  logger: true,
});

fastify.register(tasksRoutes);

fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});

import Fastify from 'fastify';

import { routes as tasksRoutes } from './routes/tasksRoutes.js';

const fastify = Fastify({
  logger: true,
});

fastify.register(tasksRoutes);

// Run the server!
fastify.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});

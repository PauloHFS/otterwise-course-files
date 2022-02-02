import { prisma } from '../helpers/prisma.js';

export const index = async () => {
  const allTasks = await prisma.tasks.findMany();
  return allTasks;
};

export const show = async (req, reply) => {
  const task = await prisma.user.findUnique({
    where: {
      id: +req.params.id,
    },
  });

  if (!task) {
    reply.status(404).send('Task não encontrado');
  }
  return task;
};

export const create = async (req, reply) => {
  const { titulo, descricao } = req.body;

  if (!titulo) {
    reply
      .status(400)
      .send({ error: true, message: 'Task precisa de um titulo!' });
  }

  let data = { titulo };

  if (descricao) {
    data = { ...data, descricao };
  }

  const task = await prisma.tasks.create({ data });

  reply.status(203).send(task);
};

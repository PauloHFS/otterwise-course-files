import { prisma } from '../helpers/prisma.js';

export const index = async () => {
  const allTasks = await prisma.tasks.findMany();
  return allTasks;
};

/* export const create = async (req, reply) => {
  const { titulo, descricao } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      ...(postTitle && {
        posts: {
          create: { title: postTitle },
        },
      }),
    },
  });
  reply.send(user);
}; */

/* export const show = async (req, reply) => {
  const user = await prisma.user.findUnique({
    where: {
      id: +req.params.id,
    },
  });

  if (!user) {
    reply.status(404).send('Usuário não encontrado');
  }
  return user;
};
 */

import { prisma } from '../helpers/utils.js';

export const index = async (req, reply) => {
  console.log('user', req.user);
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      nome: true,
      idade: true,
    },
  });
  return users;
};

export const update = async (req, reply) => {
  const {
    user: { id },
  } = req;
  const { nome, idade } = req.body;

  try {
    const usuario = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...{ nome, idade },
      },
      select: {
        id: true,
        email: true,
        nome: true,
        idade: true,
      },
    });
    reply.send(usuario);
  } catch (error) {
    reply.send(error);
  }
};

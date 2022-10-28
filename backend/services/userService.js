const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const user = async () => {
  const userEmail = await prisma.user.findFirst({
    orderBy: {
      id: 'desc',
    },
  });
  if (!userEmail) return false;
  return userEmail;
};

const createUser = async (body) => {
  const user = await prisma.user.create({
    data: {
      name: body.name,
      linkedin: body.linkedin,
      github: body.github,
    },
  });
  if (!user) return false;
  return user;
}

module.exports = { user, createUser };

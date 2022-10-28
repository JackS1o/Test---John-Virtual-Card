const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const user = async (body) => {
  const userEmail = await prisma.user.findUnique({
    where: {
      email: body.name,
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
  return user;
}

module.exports = { user, createUser };

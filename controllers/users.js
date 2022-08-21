import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({});

    res.json({ users });
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
  }
};

export const getKanbanByUserId = async (req, res) => {
  try {
    const kanban = await prisma.kanban.findMany({});
    res.json({ kanban });
  } catch (error) {
    console.error(error.message);
  }
};

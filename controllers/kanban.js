import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createKanban = async (req, res) => {
  const kanbanBoard = req.body;
  const id = req.params.id;

  console.log('KANBAN BOARD REQUEST BODY : ', kanbanBoard);
  console.log('IDENTITY : ', id);
  try {
    if (!kanbanBoard) {
      throw new Error('Please provide content');
    }

    const kanban = await prisma.kanban.create({
      data: { data: kanbanBoard },
      users: {
        connect: {
          id,
        },
      },
    });
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

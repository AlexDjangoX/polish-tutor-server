import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createKanban = async (req, res) => {
  const kanbanData = req.body;
  const id = Number(req.params.id.split('|')[1].replace(/[a-z]/gi, ''));

  try {
    if (!kanbanData) {
      throw new Error('Please provide content');
    }

    const kanban = await prisma.kanban.create({
      data: { kanbanObject: kanbanData, userId: 2 },
    });
    console.log('RESPONSE : ', typeof kanban);
    return kanban;
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

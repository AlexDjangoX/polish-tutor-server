import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createKanban = async (req, res) => {
  const kanbanData = req.body;
  const id = String(req.params.id);

  console.log('KANBAN BOARD REQUEST BODY : ', kanbanData);
  console.log('IDENTITY : ', id);
  try {
    if (!kanbanData) {
      throw new Error('Please provide content');
    }

    const kanban = await prisma.kanban.create({
      data: { kanbanObject: kanbanData, userId: 3 },
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

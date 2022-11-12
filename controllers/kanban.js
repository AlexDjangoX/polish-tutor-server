import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createKanban = async (req, res) => {
  try {
    const kanbanData = req.body;
    const id = Number(req.params.id.split('|')[1].replace(/[a-z]/gi, ''));

    if (!kanbanData || !id) {
      throw new Error('Please provide content');
    }

    const findKanban = await prisma.kanban.findUnique({
      where: { userId: id },
    });

    if (!findKanban) {
      const createdKanban = await prisma.kanban.create({
        data: { kanbanObject: kanbanData, userId: id },
      });

      res.status(200).json({ data: createdKanban });
    } else {
      const updatedKanban = await prisma.kanban.update({
        where: { userId: id },
        data: { kanbanObject: kanbanData, userId: id },
      });

      res.status(200).json({ data: updatedKanban });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const getKanbanByUserId = async (req, res) => {
  try {
    // const kanban = await prisma.kanban.findMany({});
    // res.json({ kanban });
  } catch (error) {
    console.error(error.message);
  }
};

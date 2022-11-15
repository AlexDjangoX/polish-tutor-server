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
    const id = Number(req.params.id.split('|')[1].replace(/[a-z]/gi, ''));
    const foundKanban = await prisma.kanban.findUnique({
      where: { userId: id },
    });
    if (!foundKanban || !id) {
      throw new Error('Please provide valid user');
    }
    // console.log(
    //   'FOUND KANBAN : ',
    //   foundKanban.kanbanObject.columnFour.items[1].id
    // );
    res.status(200).json({ data: foundKanban });
  } catch (error) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const deleteVerbById = async (req, res) => {
  try {
    const verbId = req.body;
    const kanbanId = Number(req.params.id.split('|')[1].replace(/[a-z]/gi, ''));

    const foundKanban = await prisma.kanban.findUnique({
      where: { userId: kanbanId },
    });

    if (!foundKanban || !verbId || !kanbanId) {
      throw new Error('Please provide valid user 69');
    }
    const verbArray = foundKanban.kanbanObject.columnFour.items;
    const updatedVerbArray = verbArray.filter((el) => el.id !== verbId.verbId);

    const updatedObject = (obj) => {
      const objClone = JSON.parse(JSON.stringify({ ...obj }));
      for (let j in objClone) {
        if (objClone[j].name == 'Stare słowa') {
          objClone[j].items = updatedVerbArray;
          console.log(objClone[j].items);
        }
      }

      return objClone;
    };

    const updateKanbanObject = await updatedObject(foundKanban.kanbanObject);

    await prisma.kanban.update({
      where: { userId: kanbanId },
      data: { kanbanObject: updateKanbanObject },
    });

    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

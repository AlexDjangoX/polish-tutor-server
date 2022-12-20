import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createNewVerb = async (req, res) => {
  try {
    const auth_id = req.params.id;
    const data = req.body;

    const createdVerb = await prisma.verb.create({
      data: {
        user: {
          connect: {
            auth0ID: auth_id,
          },
        },
        ...data,
      },
    });

    res.status(200).json({ data: createdVerb });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const getAllVerbsById = async (req, res) => {
  console.log('Inside get all verbs by ID : ', req.params.id);
  try {
    const auth_id = req.params.id;

    const verbs = await prisma.verb.findMany({
      where: {
        user: {
          auth0ID: {
            equals: auth_id,
          },
        },
      },
    });

    res.status(200).json({ data: verbs });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

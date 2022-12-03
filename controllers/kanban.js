import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedData = {
  kanbanObject: {
    column_A: {
      name: 'Nowe słowa',
      items: [
        {
          id: 'bbed9bf7-6453-4c6a-8d61-e20bce3e313a',

          past: {
            past_ja_fem: 'szłam',
            past_my_fem: 'szłyśmy',
            past_ty_fem: 'szłaś',
            past_wy_fem: 'szyście',
            past_ja_masc: 'szedłem',
            past_my_masc: 'szliśmy',
            past_on_masc: 'szedł',
            past_ona_fem: 'szła',
            past_one_fem: 'szły',
            past_ty_masc: 'szedłeś',
            past_wy_masc: 'szliście',
            past_oni_masc: 'szli',
          },
          notes:
            'Dokąd dziś pójdziemy? Myślę, że pójdziemy do sklepu. Why not.',
          present: {
            present_ja: 'idę',
            present_my: 'idziemy',
            present_ty: 'idiesz',
            present_wy: 'idziecie',
            present_oni_one: 'idą',
            present_on_ona_ono: 'idzie',
          },
          gram_case: {
            case: 'Biernik',
            color: '#ff2233',
            aspect: 'Niedokonany',
          },
          future_fem: {
            future_fem_ja: 'będę szła',
            future_fem_my: 'będziemy szły',
            future_fem_ty: 'będziesz szła',
            future_fem_wy: 'będziecie szły',
            future_fem_ona: 'będzie szła',
            future_fem_one: 'będą szły',
          },
          imp_future: {
            imp_future_ja: 'będę iść',
            imp_future_my: 'będziemy iść',
            imp_future_ty: 'będziesz iść',
            imp_future_wy: 'będziecie iść',
            imp_future_oni_one: 'będą iść',
            imp_future_on_ona_ono: 'będzie iść',
          },
          word_image: {
            image_url:
              'https://thumbs.dreamstime.com/b/cartoon-illustration-construction-worker-frowning-expression-holding-go-traffic-sign-cartoon-construction-worker-135307416.jpg',
            polish_word: 'iść',
            english_word: 'To go',
          },
          future_masc: {
            future_masc_ja: 'będę szedł',
            future_masc_my: 'będziemy szli',
            future_masc_on: 'będzie szedł',
            future_masc_ty: 'będziesz szedł',
            future_masc_wy: 'będziecie szli',
            future_masc_oni: 'będą szli',
          },
        },
      ],
    },
    column_B: {
      name: 'Przeszły',
      items: [],
    },
    column_C: {
      name: 'Przyszły',
      items: [],
    },
    column_D: {
      name: 'Stare słowa',
      items: [],
    },
  },
  userId: undefined,
  createdAt: undefined,
  updatedAt: undefined,
};

export const updateKanban = async (req, res) => {
  try {
    const kanbanData = req.body;
    const auth_id = req.params.id;

    if (!kanbanData || !auth_id) {
      throw new Error('Please provide content');
    }

    const findKanban = await prisma.kanban.findUnique({
      where: { auth0: auth_id },
    });

    if (!findKanban) {
      res.status(404).json({ status: 'fail', message: err });
    }

    const updatedKanban = await prisma.kanban.update({
      where: { auth0: auth_id },
      data: { kanbanObject: kanbanData, auth0: auth_id },
    });

    res.status(200).json({ data: updatedKanban });
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

export const createOrGetKanbanByAuth0ID = async (req, res) => {
  try {
    const auth_id = req.params.id;

    if (!auth_id) {
      throw new Error('Please provide valid user');
    }

    const foundKanban = await prisma.kanban.findUnique({
      where: { auth0: auth_id },
    });

    if (foundKanban) {
      res.status(200).json({ data: foundKanban });
    }

    if (!foundKanban) {
      let data = seedData.data;

      const user = await prisma.user.create({
        data: { auth0ID: auth_id },
      });

      const createdKanban = await prisma.kanban.create({
        data: {
          ...seedData,
          user: {
            connect: { auth0ID: auth_id },
          },
        },
      });

      res.status(200).json({ data: createdKanban });
    }
  } catch (err) {
    console.log(err);
    res.status(404).json({ status: 'fail', message: err });
  }
};

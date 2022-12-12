import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const seedData = {
  kanbanObject: {
    column_A: {
      name: 'Nowe słowa',
      items: [
        {
          id: 'd509237d-6e00-4da9-ae33-80fcd41c2485',
          past: {
            past_ja_fem: 'tworzyłam',
            past_my_fem: 'tworzyłyśmy',
            past_ty_fem: 'tworzyłaś',
            past_wy_fem: 'tworzyłyście',
            past_ja_masc: 'tworzyłem',
            past_my_masc: 'tworzyliśmy',
            past_on_masc: 'tworzył',
            past_ona_fem: 'tworzyły',
            past_one_fem: 'tworzyły',
            past_ty_masc: 'tworzyłeś',
            past_wy_masc: 'tworzyliście',
            past_oni_masc: 'tworzyli',
          },
          notes:
            'Uwielbiam tworzyć nowe i ekscytujące narzędzia, które pomogą mi w nauce języka polskiego.\nUwielbiam tworzyć nowe rzeczy za pomocą React.\nBędę tworzył więcej aplikacji React.\nProszę przetłumaczyć na język angielski.',
          present: {
            present_ja: 'tworzę',
            present_my: 'tworyzmy',
            present_ty: 'tworzysz',
            present_wy: 'tworzycie',
            present_oni_one: 'tworzą',
            present_on_ona_ono: 'tworzy',
          },
          gram_case: {
            case: 'Biernik',
            color: '#ff2233',
            aspect: 'Dokonany',
          },
          future_fem: {
            future_fem_ja: 'będę tworzyła',
            future_fem_my: 'będziemy tworzyły',
            future_fem_ty: 'będziesz tworzyła',
            future_fem_wy: 'będziecie tworzyły',
            future_fem_ona: 'będzie tworzyła',
            future_fem_one: 'będą tworzyły',
          },
          imp_future: {
            imp_future_ja: 'będą tworzyć',
            imp_future_my: 'będziemy tworzyć',
            imp_future_ty: 'będziesz tworzyć',
            imp_future_wy: 'będziecie tworzyć',
            imp_future_oni_one: 'będą tworzyć',
            imp_future_on_ona_ono: 'będzie tworzyć',
          },
          word_image: {
            image_url:
              'https://www.cqu.edu.au/__data/assets/image/0022/146407/create-concept.jpg',
            polish_word: 'Tworzyć',
            english_word: 'To create',
          },
          future_masc: {
            future_masc_ja: 'będę tworzył',
            future_masc_my: 'będziemy tworzyli',
            future_masc_on: 'będzie tworzył',
            future_masc_ty: 'będziesz tworzył',
            future_masc_wy: 'będziecie tworzyli',
            future_masc_oni: 'będą tworzyli',
          },
          conditional_masculine: {
            conditional_masculine_ja: 'tworzyłbym',
            conditional_masculine_ty: 'tworzyłbyś',
            conditional_masculine_on: 'tworzyłby',
            conditional_masculine_my: 'tworzylibyśmy',
            conditional_masculine_wy: 'tworzylibyście',
            conditional_masculine_oni: 'tworzyliby',
          },
          conditional_feminine: {
            conditional_feminine_ja: 'tworzyłabym',
            conditional_feminine_ty: 'tworzyłabyś',
            conditional_feminine_ona: 'tworzyłaby',
            conditional_feminine_my: 'tworzyłybyśmy',
            conditional_feminine_wy: 'tworzyłybyście',
            conditional_feminine_one: 'tworzyłyby',
          },
          imperative: {
            imperative_ja: '',
            imperative_ty: 'twórz',
            imperative_on_ona_oni: 'niech tworzy',
            imperative_my: 'twórzmy',
            imperative_wy: 'twórzcie',
            imperative_oni: 'niech tworzą',
          },
        },
        {
          id: '4909d92e-ff69-4c80-bb13-23d2f9788c71',
          past: {
            past_ja_fem: 'sprawdziłam',
            past_my_fem: 'sprawdziłyśmy',
            past_ty_fem: 'sprawdziłaś',
            past_wy_fem: 'sprawdziłyście',
            past_ja_masc: 'sprawdziłem',
            past_my_masc: 'sprawdzaliśmy',
            past_on_masc: 'sprawdził',
            past_ona_fem: 'sprawdziła',
            past_one_fem: 'sprawdziły',
            past_ty_masc: 'sprawdziłeś',
            past_wy_masc: 'sprawdziliście',
            past_oni_masc: 'sprawdzili',
          },
          notes:
            'Proszę sprawdzić, czy w lodówce jest jedzenie.\nWczoraj sprawdziłem sierść kota pod kątem kleszczy i pcheł. Na szczęście nie znalazłem żadnego.',
          present: {
            present_ja: 'sprawdzę',
            present_my: 'sprawdzimy',
            present_ty: 'sprawdzisz',
            present_wy: 'sprawdzicie',
            present_oni_one: 'sprawdzą',
            present_on_ona_ono: 'sprawdzi',
          },
          gram_case: {
            case: 'Dopełniacz',
            color: '#ff2233',
            aspect: 'Niedokonany',
          },
          future_fem: {
            future_fem_ja: 'będę ',
            future_fem_my: 'będziemy ',
            future_fem_ty: 'będziesz ',
            future_fem_wy: 'będziecie ',
            future_fem_ona: 'będzie ',
            future_fem_one: 'będą ',
          },
          imp_future: {
            imp_future_ja: 'będę ',
            imp_future_my: 'będziemy ',
            imp_future_ty: 'będziesz ',
            imp_future_wy: 'będziecie ',
            imp_future_oni_one: 'będą ',
            imp_future_on_ona_ono: 'będzie ',
          },
          word_image: {
            image_url:
              'https://img.freepik.com/premium-vector/cute-cartoon-character-boy-check-brag_81698-1309.jpg?w=2000',
            polish_word: 'Sprawdzić',
            english_word: 'To check',
          },
          future_masc: {
            future_masc_ja: 'sprawdzę',
            future_masc_my: 'sprawdzimy ',
            future_masc_on: 'sprawdzi',
            future_masc_ty: 'sprawdzis',
            future_masc_wy: 'sprawdzicie ',
            future_masc_oni: 'sprawdzą ',
          },
          conditional_masculine: {
            conditional_masculine_ja: '',
            conditional_masculine_ty: '',
            conditional_masculine_on: '',
            conditional_masculine_my: '',
            conditional_masculine_wy: '',
            conditional_masculine_oni: '',
          },
          conditional_feminine: {
            conditional_feminine_ja: '',
            conditional_feminine_ty: '',
            conditional_feminine_ona: '',
            conditional_feminine_my: '',
            conditional_feminine_wy: '',
            conditional_feminine_one: '',
          },
          imperative: {
            imperative_ja: '',
            imperative_ty: 'sprawdź',
            imperative_on_ona_oni: 'niech sprawdzi',
            imperative_my: 'sprawdźmy',
            imperative_wy: 'sprawdźcie',
            imperative_oni: 'niech sprawdzą',
          },
        },
      ],
    },
    column_B: {
      name: 'Przeszły',
      items: [
        {
          id: '76ff3352-e572-4468-9f1a-649390b19dcf',
          past: {
            past_ja_fem: 'używałam',
            past_my_fem: 'używałyśmy',
            past_ty_fem: 'używałaś',
            past_wy_fem: 'używałyście',
            past_ja_masc: 'używałem',
            past_my_masc: 'używaliśmy',
            past_on_masc: 'używał',
            past_ona_fem: 'używała',
            past_one_fem: 'używały',
            past_ty_masc: 'używałeś',
            past_wy_masc: 'używaliście',
            past_oni_masc: 'używali',
          },
          notes:
            'Nie zgadzam się, moja Niuńcia kładzie się jak kula na podłodze jak się ubieram , mizia się koło nóg chce jeszcze więcej głaskania. A jak tylko wchodze do domu spowrotem to biegnie jak małe dziecko i od razu na rączki i się wtula.\nMyślę, że muszę dziś jechać własnym samochodem do miasta.',
          present: {
            present_ja: 'używam  ',
            present_my: 'używamy',
            present_ty: 'używasz',
            present_wy: 'używacie',
            present_oni_one: 'używają',
            present_on_ona_ono: 'używa',
          },
          gram_case: {
            case: 'Biernik',
            color: '#ff2233',
            aspect: 'Dokonany',
          },
          future_fem: {
            future_fem_ja: 'będę używała',
            future_fem_my: 'będziemy używały',
            future_fem_ty: 'będziesz używała',
            future_fem_wy: 'będziecie używały',
            future_fem_ona: 'będzie używała',
            future_fem_one: 'będą używały',
          },
          imp_future: {
            imp_future_ja: 'będę używać',
            imp_future_my: 'będziemy używać',
            imp_future_ty: 'będziesz używać',
            imp_future_wy: 'będziecie używać',
            imp_future_oni_one: 'będą używać',
            imp_future_on_ona_ono: 'będzie używać',
          },
          word_image: {
            image_url:
              'https://media.istockphoto.com/vectors/guy-hipster-sits-on-toilet-bowl-with-phone-in-hands-vector-id612244494?s=170667a',
            polish_word: 'Używać',
            english_word: 'To use',
          },
          future_masc: {
            future_masc_ja: 'będę używał',
            future_masc_my: 'będziemy używali',
            future_masc_on: 'będzie używał',
            future_masc_ty: 'będziesz używał',
            future_masc_wy: 'będziecie używali',
            future_masc_oni: 'będą używali',
          },
          conditional_masculine: {
            conditional_masculine_ja: 'używałbym',
            conditional_masculine_ty: 'używałbyś',
            conditional_masculine_on: 'używałby',
            conditional_masculine_my: 'używalibyśmy',
            conditional_masculine_wy: 'używalibyście',
            conditional_masculine_oni: 'używaliby',
          },
          conditional_feminine: {
            conditional_feminine_ja: 'używałabym',
            conditional_feminine_ty: 'używałabyś',
            conditional_feminine_ona: 'używałaby',
            conditional_feminine_my: 'używałybyśmy',
            conditional_feminine_wy: 'używałybyście',
            conditional_feminine_one: 'używałyby',
          },
          imperative: {
            imperative_ja: '',
            imperative_ty: '(Ty) używaj',
            imperative_on_ona_oni: '(On) niech używa',
            imperative_my: '(My) używajmy',
            imperative_wy: '(Wy) używajcie',
            imperative_oni: '(Oni) niech używają',
          },
        },
      ],
    },
    column_C: {
      name: 'Przyszły',
      items: [
        {
          id: '7d7aa7e5-8ac3-477b-867f-9672d0ca5df3',
          past: {
            past_ja_fem: 'trwałam',
            past_my_fem: 'trwałałyśmy',
            past_ty_fem: 'trwałaś',
            past_wy_fem: 'trwałałyście',
            past_ja_masc: 'trwałem',
            past_my_masc: 'trawaliśmy',
            past_on_masc: 'trwał',
            past_ona_fem: 'trwała',
            past_one_fem: 'trwałały',
            past_ty_masc: 'trwałeś',
            past_wy_masc: 'trwaliście',
            past_oni_masc: 'trwali',
          },
          notes:
            'Jak długo może to potrwać?\nBez obawy, ból potrwa tylko chwilę.\nMoje bankructwo potrwałoby 18 miesięcy. \nMój kurs trwał sześć miesięcy. Cieszę się, że to się skończyło, bo nie sądziłem, że wytrzymam.\nAngielski tekst do przetłumaczenia\n\n',
          present: {
            present_ja: 'trwam',
            present_my: 'trwamy',
            present_ty: 'trwasz',
            present_wy: 'trwacie',
            present_oni_one: 'trwają',
            present_on_ona_ono: 'trwa',
          },
          gram_case: {
            case: 'Biernik',
            color: '#ff2233',
            aspect: 'Dokonany',
          },
          future_fem: {
            future_fem_ja: 'będę trwała',
            future_fem_my: 'będziemy trwały',
            future_fem_ty: 'będziesz trwała',
            future_fem_wy: 'będziecie trwały',
            future_fem_ona: 'będzie trwała',
            future_fem_one: 'będą trwały',
          },
          imp_future: {
            imp_future_ja: 'będę trwać',
            imp_future_my: 'będziemy trwać',
            imp_future_ty: 'będziesz trwać',
            imp_future_wy: 'będziecie trwać',
            imp_future_oni_one: ' będą trwać',
            imp_future_on_ona_ono: 'będzie trwać',
          },
          word_image: {
            image_url:
              'https://thumbs.dreamstime.com/b/time-control-retro-cartoon-design-running-man-clock-background-schedule-grey-gears-vector-illustration-86568744.jpg',
            polish_word: 'Trwać',
            english_word: 'To last',
          },
          future_masc: {
            future_masc_ja: 'będę trwał',
            future_masc_my: 'będziemy trwali',
            future_masc_on: 'będzie trwał',
            future_masc_ty: 'będziesz trwał',
            future_masc_wy: 'będziecie trwali',
            future_masc_oni: 'będą trwali',
          },
          conditional_masculine: {
            conditional_masculine_ja: 'trwałbym',
            conditional_masculine_ty: 'trwałbyś',
            conditional_masculine_on: 'trwałby',
            conditional_masculine_my: 'trwalibyśmy',
            conditional_masculine_wy: 'trwalibyście',
            conditional_masculine_oni: 'trwaliby',
          },
          conditional_feminine: {
            conditional_feminine_ja: 'trwałabym',
            conditional_feminine_ty: 'trwałabyś',
            conditional_feminine_ona: 'trwałaby',
            conditional_feminine_my: 'trwałybyśmy',
            conditional_feminine_wy: 'trwałybyście',
            conditional_feminine_one: 'trwałyby',
          },
          imperative: {
            imperative_ja: '',
            imperative_ty: 'trwaj',
            imperative_on_ona_oni: 'niech trwa',
            imperative_my: 'trwajmy',
            imperative_wy: 'trwacie',
            imperative_oni: 'niech trwają',
          },
        },
      ],
    },
    column_D: {
      name: 'Stare słowa',
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
          notes: 'Dokąd dziś pójdziemy? Myślę, że pójdziemy do sklepu.',
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
          conditional_masculine: {
            conditional_masculine_ja: 'szedłbym',
            conditional_masculine_ty: 'szedłbyś',
            conditional_masculine_on: 'szedłby',
            conditional_masculine_my: 'szlibyśmy',
            conditional_masculine_wy: 'szlibyście',
            conditional_masculine_oni: 'szliby',
          },
          conditional_feminine: {
            conditional_feminine_ja: 'szłabym',
            conditional_feminine_ty: 'szłabyś',
            conditional_feminine_ona: 'szłaby',
            conditional_feminine_my: 'szłybyśmy',
            conditional_feminine_wy: 'szłybyście',
            conditional_feminine_one: 'szłyby',
          },
          imperative: {
            imperative_ja: '',
            imperative_ty: 'idź',
            imperative_on_ona_oni: 'niech idzie',
            imperative_my: 'idźmy',
            imperative_wy: 'idźcie',
            imperative_oni: 'niech idą',
          },
        },
      ],
    },
  },
  userId: undefined,
  createdAt: undefined,
  updatedAt: undefined,
};

import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

    if (auth_id === 'undefined') {
      res.sendFile(path.join(__dirname, '../build/index.html'));
      return;
    }

    const foundKanban = await prisma.kanban.findUnique({
      where: { auth0: auth_id },
    });

    if (foundKanban) {
      await res.status(200).json({ data: foundKanban });
    }

    if (!foundKanban && auth_id.length < 5) {
      await prisma.user.create({
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

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import pkg from 'http-errors';
const { NotFound } = pkg;
import userRouter from './routes/user.js';

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
  res.send({ message: 'Awesome it works' });
});

app.use('/users', userRouter);

app.use((req, res, next) => {
  next(NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running @ http://localhost:${PORT}`));

export default app;

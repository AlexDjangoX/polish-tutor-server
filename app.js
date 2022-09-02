import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.js';
import pkg from 'express-jwt';
const { expressjwt } = pkg;
import jwks from 'jwks-rsa';

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const jwtCheck = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 500,
    jwksUri: 'https://dev-k52tn9kn.eu.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://www.polish-api.com',
  issuer: 'https://dev-k52tn9kn.eu.auth0.com/',
  algorithms: ['RS256'],
}).unless({ path: ['/'] });

app.use(jwtCheck);

app.get('/', async (req, res, next) => {
  res.send({ message: 'Index entry point route' });
});

app.post('/protected', jwtCheck, (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: 'Protected route' });
});

app.use('/users', userRouter);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || 'Internal server error';
  res.status(status).send(message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running @ http://localhost:${PORT}`));

export default app;

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

import config from './config/constants';


const { PORT } = config;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(json());
app.use(urlencoded({
  extended: true,
}));

app.get('/status', (req, res) => {
  res.json({ status: 'Working!' });
});


const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend is running on PORT: ${PORT}`);
});

export default server;

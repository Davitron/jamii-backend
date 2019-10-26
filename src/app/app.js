
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();


app.use(logger('dev'));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));


// app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/*', (_req, res) => {
  res.status(200).send('Welcome to Jamii')
});

export default app;
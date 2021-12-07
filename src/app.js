import express from 'express';

import cookieParser from 'cookie-parser';
import logger from 'morgan';

// routers
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import sampleRouter from './routes/sample';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sample', sampleRouter);

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

export default app;

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
// routers
import indexRouter from 'routes/index';
import membersRouter from 'routes/members';
import sampleRouter from 'routes/sample';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use('/', indexRouter);
app.use('/members', membersRouter);
app.use('/sample', sampleRouter);

export default app;

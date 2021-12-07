import express from 'express';

const indexRouter = express.Router();

// GET request
indexRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'This is a GET request to /' });
});

export default indexRouter;

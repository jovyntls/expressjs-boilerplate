import express from 'express';

const userRouter = express.Router();

// GET /users
userRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'This is a GET request to /users!' });
});

export default userRouter;

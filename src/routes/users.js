import express from 'express';
import { listUsers } from 'src/controllers/users';

const userRouter = express.Router();

// GET /users
userRouter.get('/', listUsers);

export default userRouter;

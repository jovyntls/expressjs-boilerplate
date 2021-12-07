import express from 'express';
import { listUsers } from '../controllers/users';

const userRouter = express.Router();

// GET /users
userRouter.get('/', listUsers);

export default userRouter;

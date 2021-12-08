import express from 'express';
import { addMember, listMembers } from 'src/controllers/members';

const membersRouter = express.Router();

membersRouter.get('/', listMembers);
membersRouter.post('/', addMember);

export default membersRouter;

import express from 'express';
import { addMember, listMembers, removeMember } from 'controllers/members';

const membersRouter = express.Router();

membersRouter.get('/', listMembers);
membersRouter.post('/', addMember);
membersRouter.delete('/:id', removeMember);

export default membersRouter;

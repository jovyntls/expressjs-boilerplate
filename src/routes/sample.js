import express from 'express';
import getSample from 'src/controllers/sample';

const sampleRouter = express.Router();

// GET /sample
sampleRouter.get('/', getSample);

export default sampleRouter;

import { Router } from 'express';

import { createNewVerb } from '../controllers/verb.js';
import { getAllVerbsById } from '../controllers/verb.js';

const router = Router();

router.post('/:id', createNewVerb);

router.get('/:id', getAllVerbsById);

export default router;

import { Router } from 'express';
import {
  createOrGetKanbanByAuth0ID,
  updateKanban,
} from '../controllers/kanban.js';

import { reactRouterRoutesReturnHTML } from '../controllers/reactRouterRoutes.js';

const router = Router();

router.put('/:id', updateKanban);

router.get('/:id', createOrGetKanbanByAuth0ID);
// router.get('/', reactRouterRoutesReturnHTML);
export default router;

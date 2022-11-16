import { Router } from 'express';
import { getKanbanByUserId, createKanban } from '../controllers/kanban.js';

const router = Router();

router.put('/:id', createKanban);

router.get('/:id', getKanbanByUserId);

export default router;

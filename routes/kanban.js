import { Router } from 'express';
import {
  getKanbanByUserId,
  deleteVerbById,
  createKanban,
} from '../controllers/kanban.js';

const router = Router();

router.put('/:id', createKanban);

router.get('/:id', getKanbanByUserId);

router.delete('/:id', deleteVerbById);

export default router;

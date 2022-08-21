import { Router } from 'express';
import { getAllUsers } from '../controllers/users.js';
import { getUserById } from '../controllers/users.js';
import { getKanbanByUserId } from '../controllers/users.js';

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.get('/kanban/:id', getKanbanByUserId);

export default router;

import { Router } from 'express';
import { auditController } from '../controllers/audit.controller.js';

const router = Router();

router.get('/', (req, res) => auditController.getAll(req, res));
router.get('/:id', (req, res) => auditController.getById(req, res));

export default router;

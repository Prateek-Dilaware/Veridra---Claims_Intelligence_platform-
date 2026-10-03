import { Router } from 'express';
import { memberController } from '../controllers/member.controller.js';

const router = Router();

router.get('/', (req, res, next) => memberController.getAll(req, res, next));
router.get('/family/:employeeId', (req, res, next) => memberController.getFamily(req, res, next));
router.get('/:id', (req, res, next) => memberController.getById(req, res, next));
router.post('/', (req, res, next) => memberController.create(req, res, next));
router.patch('/:id', (req, res, next) => memberController.update(req, res, next));

export default router;

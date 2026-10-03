import { Router } from 'express';
import { companyController } from '../controllers/company.controller.js';

const router = Router();

router.get('/', (req, res, next) => companyController.getAll(req, res, next));
router.get('/:id', (req, res, next) => companyController.getById(req, res, next));
router.post('/', (req, res, next) => companyController.create(req, res, next));
router.patch('/:id', (req, res, next) => companyController.update(req, res, next));

export default router;

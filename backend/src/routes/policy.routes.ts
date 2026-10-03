import { Router } from 'express';
import { policyController } from '../controllers/policy.controller.js';

const router = Router();

router.get('/', (req, res, next) => policyController.getAll(req, res, next));
router.get('/:id', (req, res, next) => policyController.getById(req, res, next));
router.post('/', (req, res, next) => policyController.create(req, res, next));
router.patch('/:id', (req, res, next) => policyController.update(req, res, next));
router.get('/:id/documents', (req, res, next) => policyController.getDocuments(req, res, next));
router.get('/:id/knowledge', (req, res, next) => policyController.getKnowledge(req, res, next));
router.post('/:id/knowledge', (req, res, next) => policyController.addKnowledge(req, res, next));

export default router;

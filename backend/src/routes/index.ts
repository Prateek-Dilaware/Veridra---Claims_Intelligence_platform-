import { Router } from 'express';
import healthRoutes from './health.routes.js';
import companyRoutes from './company.routes.js';
import policyRoutes from './policy.routes.js';
import memberRoutes from './member.routes.js';
import auditRoutes from './audit.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/companies', companyRoutes);
router.use('/policies', policyRoutes);
router.use('/members', memberRoutes);
router.use('/audits', auditRoutes);

export default router;

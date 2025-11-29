import { Router } from 'express';
import { lock, unlock, getStatus } from '../controllers/savingsController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.post('/lock', lock);
router.post('/unlock/:planId', unlock);
router.get('/status', getStatus);

export default router;
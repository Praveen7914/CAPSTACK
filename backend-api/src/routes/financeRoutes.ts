import { Router } from 'express';
import { calculateFinance, getHealthScore, getSurvival } from '../controllers/financeController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.post('/calculate', calculateFinance);
router.get('/healthscore', getHealthScore);
router.get('/survival', getSurvival);

export default router;
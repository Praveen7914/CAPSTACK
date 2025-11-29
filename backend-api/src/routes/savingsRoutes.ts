import { Router } from 'express';
import { getSavings, createSavingsPlan } from '../controllers/savingsController';

const router = Router();

router.get('/', getSavings);
router.post('/plan', createSavingsPlan);

export default router;
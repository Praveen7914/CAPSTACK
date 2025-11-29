import { Router } from 'express';
import { getFinances, addIncome, addExpense } from '../controllers/financeController';

const router = Router();

router.get('/', getFinances);
router.post('/income', addIncome);
router.post('/expense', addExpense);

export default router;
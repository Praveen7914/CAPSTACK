import { Request, Response } from 'express';
import { calculateHealthScore } from '../services/healthScoreService';
import { calculateSurvivalMonths } from '../services/survivalService';

export const calculateFinance = async (req: Request, res: Response) => {
  // TODO: General finance calculations
  const { income, expenses } = req.body;
  const ratio = expenses / income;
  res.json({ expenseRatio: ratio });
};

export const getHealthScore = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const result = calculateHealthScore(userId);
  res.json(result);
};

export const getSurvival = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const result = calculateSurvivalMonths(userId);
  res.json(result);
};
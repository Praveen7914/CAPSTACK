import { Request, Response } from 'express';
import { lockSavings, unlockSavings, getSavingsStatus } from '../services/savingsService';

export const lock = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { amount } = req.body;
  const result = lockSavings(userId, amount);
  res.json(result);
};

export const unlock = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { planId } = req.params;
  const result = unlockSavings(userId, parseInt(planId));
  res.json(result);
};

export const getStatus = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const result = getSavingsStatus(userId);
  res.json(result);
};
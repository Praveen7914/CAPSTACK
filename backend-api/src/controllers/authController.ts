import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import { config } from '../config/env';

export const register = async (req: Request, res: Response) => {
  // Implementation
};

export const login = async (req: Request, res: Response) => {
  // Implementation
};
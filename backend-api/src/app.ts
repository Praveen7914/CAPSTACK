import express from 'express';
import cors from 'cors';
import { config } from './config/env';
import { connectDB } from './config/db';
import { connectCache } from './config/cache';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import financeRoutes from './routes/financeRoutes';
import savingsRoutes from './routes/savingsRoutes';
import { authMiddleware } from './middleware/authMiddleware';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', authMiddleware, userRoutes);
app.use('/api/finance', authMiddleware, financeRoutes);
app.use('/api/savings', authMiddleware, savingsRoutes);

app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  await connectCache();
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
};

startServer();
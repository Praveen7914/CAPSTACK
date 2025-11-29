import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import financeRoutes from './routes/financeRoutes';
import savingsRoutes from './routes/savingsRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/auth', authRoutes);
app.use('/finance', financeRoutes);
app.use('/savings', savingsRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import mongoose, { Document, Schema } from 'mongoose';

export interface IIncome extends Document {
  userId: mongoose.Types.ObjectId;
  amount: number;
  source: string;
  date: Date;
}

const incomeSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  source: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IIncome>('Income', incomeSchema);
import mongoose, { Document, Schema } from 'mongoose';

export interface ISavingsPlan extends Document {
  userId: mongoose.Types.ObjectId;
  goal: string;
  targetAmount: number;
  currentAmount: number;
  deadline: Date;
}

const savingsPlanSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  goal: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  deadline: { type: Date, required: true }
});

export default mongoose.model<ISavingsPlan>('SavingsPlan', savingsPlanSchema);
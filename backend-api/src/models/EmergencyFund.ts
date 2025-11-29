import mongoose, { Document, Schema } from 'mongoose';

export interface IEmergencyFund extends Document {
  userId: mongoose.Types.ObjectId;
  targetAmount: number;
  currentAmount: number;
  monthlyContribution: number;
}

const emergencyFundSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  targetAmount: { type: Number, required: true },
  currentAmount: { type: Number, default: 0 },
  monthlyContribution: { type: Number, required: true }
});

export default mongoose.model<IEmergencyFund>('EmergencyFund', emergencyFundSchema);
import mongoose from 'mongoose';
 
const emailPatternSchema = new mongoose.Schema(
  {
      email_pattern: {
        type: String
      },
      count: { 
        type: Number
        }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  });

 
export default mongoose.model('EmailPattern', emailPatternSchema);
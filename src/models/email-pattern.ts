import mongoose from 'mongoose';
 

//mongoose modal for saving email_pattern in the db
const companyEmailPatternSchema = new mongoose.Schema(
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

 
export default mongoose.model('CompanyEmailPattern', companyEmailPatternSchema);
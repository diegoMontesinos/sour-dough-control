import mongoose, { Schema, model } from 'mongoose';

// Interface
export interface Culture {
  name: string;
  initDate: Date;
  notes?: string;
  endDate?: Date;
}

// Schema
const CultureSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name.'],
  },
  initDate: {
    type: Date,
    required: [true, 'Please provide a date.'],
  },
  notes: String,
  endDate: Date,
});

export default mongoose.models.Culture ||
  model('Culture', CultureSchema);

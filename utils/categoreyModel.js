import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const category = new Schema({
    name: String,
    subCategories: {
      name: String,
      parent: String,
    },
    subSubCategories: {
      name: String,
      parent: String,
    },
  });

 
  
export const Category = mongoose.models['Category'] || mongoose.model('Category', category);

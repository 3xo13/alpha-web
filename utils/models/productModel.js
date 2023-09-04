import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";

const product = new Schema({
  name: String, 
  category: String,
  subCategory: String,
  subSubCategory: String,
  brand: String,
  documentType: String,
  images: [String],
  details: [{
      tagName: String,
      text: String,
      _id: ObjectId,
  }],
  partNumber: String,
  options: {
      tableStyle: String,
      tables: [{
          caption: String,
          tableContent: [{
            header: String,
            values: [String],
            _id: ObjectId,
          }],
          _id: ObjectId,
      }]
  },
});

export const Product = mongoose.models['Product'] || mongoose.model('Product', product);

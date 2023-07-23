import { Schema, model, models } from 'mongoose';

const QuoteSchema = new Schema({
    name: {
    type: String,
    required: [true, 'Name is required!'],
    },
  email: {
    type: String,
    required: [true, 'Email is required!'],
  },
  message: {
    type: String,
    required: [true, 'Message is required!'],
  },
  items: {
    type: String,
  },
  phone: {
    type: String,
    required: [true, 'Phone Number required!'],
  },
});

const Quote = models.Quote || model("Quote", QuoteSchema);

export default Quote;



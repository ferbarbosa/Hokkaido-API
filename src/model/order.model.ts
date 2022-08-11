import mongoose from "mongoose";
import {nanoid} from "nanoid";

export interface OrderDocument extends mongoose.Document {
  userId: string;
  items: Array<string>;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10), // Generate a random id
    },
    userId: { type: String, required: true },
    items: { type: Array, default: true },
    status: { type: String, default: true },
  },
  { timestamps: true }
);

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);

export default Order;
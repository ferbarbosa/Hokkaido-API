import mongoose from "mongoose";
import {nanoid} from "nanoid";

export interface ItemDocument extends mongoose.Document {
  title: string;
  color: Array<any>;
  size: Array<any>;
  price: string;
  img: Array<any>;
  description: string;
  tag: Array<any>;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema = new mongoose.Schema(
  {
    itemId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10), // Generate a random id
    },
    title: { type: String, default: true },
    color: { type: Array, default: true },
    size: { type: Array, default: true },
    price: { type: String, default: true },
    img: {type: Array, default: true},
    description: { type: String, default: true },
    tag: {type: Array, default: true},
  },
  { timestamps: true }
);

const Item = mongoose.model<ItemDocument>("Item", ItemSchema);

export default Item;
import{
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions
} from "mongoose";

import Order, { OrderDocument } from "../model/order.model";

export function createOrder(input: DocumentDefinition<OrderDocument>){
    return Order.create(input);
}

export function findOrder(
    query: FilterQuery<OrderDocument>,
    options: QueryOptions = { lean: true }
) {
    return Order.findOne(query, {}, options);
}

export function findAllOrders(
    query: FilterQuery<OrderDocument>,
    options: QueryOptions = { lean: true }
){
   // const order =  findOrderByTag({ "tag" : { $in : [tag]} });
    return Order.find(query, {}, options);
}

export function findAndUpdate(
    query: FilterQuery<OrderDocument>,
    update: UpdateQuery<OrderDocument>,
    options: QueryOptions
) {
    return Order.findOneAndUpdate(query, update, options);
}
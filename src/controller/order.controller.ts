import {Request, Response} from "express";
import { get } from "lodash";
import { createOrder, findOrder, findAndUpdate, findAllOrders } from "../service/order.service";

export async function createOrderHandler(req: Request, res: Response){
    
    
    const body = req.body;

    const order = await createOrder({ ...body});

    return res.send(order);

}

export async function updateOrderHandler(req: Request, res: Response){
   
   
    const orderId = get(req, "params.orderId");
    const update = req.body;

    const order = await findOrder({ orderId });

    if(!order) return res.sendStatus(404);

    const updatedOrder = await findAndUpdate( { orderId }, update, { new: true });

    return res.send(updatedOrder);
    
}

export async function getOrderHandler(req: Request, res: Response){
    
    
    const orderId = get(req, "params.orderId");
    const order = await findOrder({ orderId });

    if(!order) return res.sendStatus(404);

    return res.send(order);    
}

export async function getAllOrdersHandler(req: Request, res: Response){

    const userId = get(req, "params.userId");

    console.log(userId);
    
    const allOrders = await findAllOrders({ "userId" :userId }).sort({["createdAt"]: 1});

    console.log(allOrders);

    if(!allOrders) return res.sendStatus(404);

    return res.send(allOrders);

}
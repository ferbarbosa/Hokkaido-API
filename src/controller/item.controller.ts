import {Request, Response} from "express";
import { get } from "lodash";
import { createItem, findItem, findAndUpdate, findAllItems, findItemByTag } from "../service/item.service";

export async function createItemHandler(req: Request, res: Response){
    
    // Cors acess
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    const body = req.body;

    const item = await createItem({ ...body});

    return res.send(item);

}

export async function updateItemHandler(req: Request, res: Response){
   
    // Cors acess
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   
    const itemId = get(req, "params.itemId");
    const update = req.body;

    const item = await findItem({ itemId });

    if(!item) return res.sendStatus(404);

    const updatedItem = await findAndUpdate( { itemId }, update, { new: true });

    return res.send(updatedItem);
    
}

export async function getItemHandler(req: Request, res: Response){
    
    // Cors acess
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    const itemId = get(req, "params.itemId");
    const item = await findItem({ itemId });

    if(!item) return res.sendStatus(404);

    return res.send(item);    
}

export async function getItemByTagHandler(req: Request, res: Response){
    
    // Cors acess
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    const tag = get(req, "params.tag");
    const item = await findItemByTag({ "tag" : { $in : [tag]} });

    if(!item) return res.sendStatus(404);

    return res.send(item);    
}

export async function getAllItemsHandler(req: Request, res: Response){

    // Cors acess
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    
    const allItems = await findAllItems();

    if(!allItems) return res.sendStatus(404);

    return res.send(allItems);

}
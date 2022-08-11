import {Request, Response} from "express";
import { get } from "lodash";
import { createItem, findItem, findAndUpdate, findAllItems, findItemByTag } from "../service/item.service";

export async function createItemHandler(req: Request, res: Response){
    
    
    const body = req.body;

    const item = await createItem({ ...body});

    return res.send(item);

}

export async function updateItemHandler(req: Request, res: Response){
   
   
    const itemId = get(req, "params.itemId");
    const update = req.body;

    const item = await findItem({ itemId });

    if(!item) return res.sendStatus(404);

    const updatedItem = await findAndUpdate( { itemId }, update, { new: true });

    return res.send(updatedItem);
    
}

export async function getItemHandler(req: Request, res: Response){
    
    const itemId = get(req, "params.itemId");
    const item = await findItem({ itemId });

    if(!item) return res.sendStatus(404);

    return res.send(item);    
}

export async function getItemByTagHandler(req: Request, res: Response){
    let sort = get(req, "query.sort");
    let orderBy = get(req, "query.orderBy");
    if(!sort) sort = "createdAt";
    if(!orderBy) orderBy = "1";
    const tag = get(req, "params.tag");
    const item = await findItemByTag({ "tag" : { $in : [tag]} }).sort({[sort]: orderBy});

    if(!item) return res.sendStatus(404);

    return res.send(item);    
}

export async function getPopularItems(req: Request, res: Response){
    
    let limit = get(req, "query.limit");
    if(!limit) limit = 10;
    const allItems = await findAllItems().sort({["orders"]: -1}).limit(limit);

    if(!allItems) return res.sendStatus(404);

    return res.send(allItems);
}

export async function getAllItemsHandler(req: Request, res: Response){

    
    //const sizes = req.query.sizes.split(",");
    //console.log(sizes);
    //Fazer validações

    let limit = get(req, "query.limit");
    if(!limit) limit = 10;
    
    const allItems = await findAllItems().sort({["orders"]: -1}).limit(limit);

    if(!allItems) return res.sendStatus(404);

    return res.send(allItems);

}

export async function getAllItemsHandlerWithFilter(req: Request, res: Response){

    
    //const sizes = req.query.sizes.split(",");
    //console.log(sizes);
    //Fazer validações

    let limit = get(req, "query.limit");
    if(!limit) limit = 10;
    let tag = get(req, "query.tag");
    if(!tag) tag = "";
    let sort = get(req, "query.sort");
    let orderBy = get(req, "query.orderBy");
    if(!sort) sort = "createdAt";
    if(!orderBy) orderBy = "1";
    
    const allItems = await findItemByTag({"tag" : { $in : [tag]}}).sort({[sort]: orderBy}).limit(limit);

    if(!allItems) return res.sendStatus(404);

    return res.send(allItems);

}
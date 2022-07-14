import{
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions
} from "mongoose";

import Item, { ItemDocument } from "../model/item.model";

export function createItem(input: DocumentDefinition<ItemDocument>){
    return Item.create(input);
}

export function findItem(
    query: FilterQuery<ItemDocument>,
    options: QueryOptions = { lean: true }
) {
    return Item.findOne(query, {}, options);
}

export function findItemByTag(
    query: FilterQuery<ItemDocument>,
    options: QueryOptions = { lean: true }
) {
    return Item.find(query, {}, options);
}

export function findAllItems(){
   // const item =  findItemByTag({ "tag" : { $in : [tag]} });
    return Item.find();
}

export function findAndUpdate(
    query: FilterQuery<ItemDocument>,
    update: UpdateQuery<ItemDocument>,
    options: QueryOptions
) {
    return Item.findOneAndUpdate(query, update, options);
}
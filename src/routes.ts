import { application, Express, Request, Response } from "express";

import { createItemHandler, updateItemHandler, getItemHandler, getAllItemsHandler } from "./controller/item.controller";

export default function(app: Express) {
    
    //Test
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

    // Create item
    app.post(
        "/additem",
        createItemHandler
    );

    // Get all items
    app.get("/items", getAllItemsHandler);

    // Get a item by id
    app.get("/items/:itemId", getItemHandler);

}
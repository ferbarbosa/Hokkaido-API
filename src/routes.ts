import { application, Express, Request, Response } from "express";

import { createItemHandler, updateItemHandler, getItemHandler, getAllItemsHandler, getItemByTagHandler, getPopularItems, getAllItemsHandlerWithFilter } from "./controller/item.controller";
import { createOrderHandler, updateOrderHandler, getOrderHandler, getAllOrdersHandler } from "./controller/order.controller";
import { createUserHandler, getUserHandler } from "./controller/user.controller";

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

    // Get a item by tag
    app.get("/items/tag/:tag", getItemByTagHandler);

    app.get("/items/popular", getPopularItems);

    app.post("/adduser", createUserHandler);

    app.post("/auth", getUserHandler);

    app.get("/order/:orderId", getOrderHandler);

    app.get("/orders/:userId", getAllOrdersHandler);

    app.post("/order", createOrderHandler);

    app.get("/catalog", getAllItemsHandlerWithFilter);

}
import{
    DocumentDefinition,
    FilterQuery,
    UpdateQuery,
    QueryOptions
} from "mongoose";

import User, { UserDocument } from "../model/user.model";

export function createUser(input: DocumentDefinition<UserDocument>){
    return User.create(input);
}

export function findUserBy(
    query: FilterQuery<UserDocument>,
    options: QueryOptions = { lean: true }
) {
    return User.findOne(query, {}, options);
}
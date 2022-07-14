import {Request, Response} from "express";
import { get } from "lodash";
import { createUser, findUserBy } from "../service/user.service";
import bcrypt from "bcrypt";

export async function createUserHandler(req: Request, res: Response){

    const body = req.body;
      

    const item = await createUser({ ...body});

    return res.send(item);

}

export async function getUserHandler(req: Request, res: Response){

    const pass = req.body.password;
    const email = req.body.email;
    const userEmailCheck = await findUserBy({ "email" : { $in : [email]} });

    console.log(userEmailCheck);

    if(!userEmailCheck) return res.sendStatus(404);

    bcrypt.compare(pass, userEmailCheck.password, function(err, result) {
        if(result){
            return res.send(userEmailCheck);
        }else{
            return res.sendStatus(404);
        }
    });
}
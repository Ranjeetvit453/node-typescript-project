import { validationResult } from "express-validator"
import userService from "../service/userService"
import { userInterface } from "../lib/userInterface";
export class UserController{

    static async userData(req:any,res:any,next:any){
      try{
       
        let userData:userInterface = req.body;
        const userRes = await userService.userData(userData);
        res.send(userRes)
      
      }catch(err){
        next(err)
      }
    }
}
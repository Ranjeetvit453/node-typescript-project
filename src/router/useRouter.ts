import express from "express";
import { UserController } from "../controller/userController";
import userValidation from "../validation/userValidation";
import globalErrorHandling from "../globalErrorHandling/globalErrorHandling";

class UserRouter{
      public router:any
    constructor(){
        this.router = express.Router();
        this.getRouter();
        this.postRouter();
        this.putRouter();
        this.patchRouter();
    }


    getRouter(){
        this.router.get("/",
        userValidation.userData(),
        UserController.userData)
    }
    postRouter(){
        this.router.post("/create",
        userValidation.userData(),
        globalErrorHandling.handleError,
        UserController.userData)
    }

    putRouter(){

    }
    patchRouter(){
        
    }
}


export default new UserRouter().router
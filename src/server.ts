import express from "express";
import useRouter from "./router/useRouter";
import cors from "cors"


export class Server{
 
    public app = express();
    public router:any
    constructor(){
       this.setConfiguration();
       this.setRouter();
       this.handle404Error()
       this.errorHandle();
    }



    setConfiguration(){
       this.setCore();
       this.setDatabase()
       this.bodyParser();
        
    }

    setCore(){
      const corsOptions = {
         "origin": "*",
         "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
         "preflightContinue": false,
         "optionsSuccessStatus": 204
       }

   this.app.use(cors(corsOptions))

    }

    setDatabase(){

    }

    bodyParser(){
     this.app.use(express.json())
    }


    setRouter(){
     this.app.use("/api/user",useRouter)
    }
     

    handle404Error(){
       this.app.use((req,res,next)=>{
          res.status(404).json({status:404,message:"pages not found"})
       })
    }


    errorHandle(){
     this.app.use((error:any,req:any,res:any,next:any)=>{
          const errorStatus = error.status || 500;
      const errorMessage =
        error.message || error || error.NotAuthorizedException || "Something Went Wrong Plz Try Again";
      res.status(errorStatus).json({ message: errorMessage, status: errorStatus });
     })
    }

   



}

export default Server
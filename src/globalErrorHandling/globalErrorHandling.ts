import { validationResult } from "express-validator";


class GlobalErrorHandling{

    static async handleError(req:any,res:any,next:any){
       try{
        const result = validationResult(req).array();
        if(result.length>0){
            next({status:403,message:result[0]?.msg});
        }
         next()
       }catch(err){
        next(err)
       }
    }
}

export default GlobalErrorHandling;
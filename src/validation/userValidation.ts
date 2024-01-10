import { body } from "express-validator"

class userValidation{

    static userData(){
       return [
          body("name","Enter name").notEmpty(),
          body("email","Enter email").notEmpty().isEmail().withMessage("enter valid email")
       ]
    }
}

export default userValidation
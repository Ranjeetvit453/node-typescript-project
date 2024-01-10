import { userInterface } from "../lib/userInterface";

class UserService{
    

    static async userData(data:userInterface):Promise<userInterface>{
        return {
            id:1,
            name:data.name,
            email:data.email
        }
    }
}


export default UserService;
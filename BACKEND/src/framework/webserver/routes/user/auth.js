import authController from "../../../../adapters/controllers/user/authController.js";
import userauthRepositoryImp from "../../../database/mongodb/repositories/user/userauthRepositoryImp.js";
import userauthRepositoryInf from "../../../../application/repositories/user/userauthRepositoryInf.js";
import userauthServiceImp from "../../../services/user/userauthServiceImp.js";
import userauthServiceInt from "../../../../application/services/user/userauthServiceInt.js";


const authRouter=(express)=>{
    const router=express.Router()
    const controller=authController(userauthRepositoryInf,userauthRepositoryImp,userauthServiceInt,userauthServiceImp)
    
    router.route('/verifyemail').post(controller.verifyemail)
    router.route('/verifyphone').post(controller.verifyphone)
    router.route('/createuser').post(controller.usercreation)
    router.route('/login').post(controller.login)
    router.route('/googlelogin').post(controller.googlelogin)
    router.route('/googlecreateuser').post(controller.usergoogle)
    router.route('/verifyemailandphone').post(controller.forgotteverification)
    router.route('/upadtepassword').post(controller.changepassword)

    

    return router;

}
export default authRouter ;
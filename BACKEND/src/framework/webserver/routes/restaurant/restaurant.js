import restaurantController from "../../../../adapters/controllers/restaurant/restaurantController.js";
import restaurantRepositoryImp from "../../../database/mongodb/repositories/restaurant/restaurantRepositoryImp.js";
import restaurantRrpositoryInf from "../../../../application/repositories/restaurant/restaurantRrpositoryInf.js";
import restaurantServiceInt from "../../../../application/services/restaurant/restaurantServiceInt.js";
import otpServiceImp from "../../../services/restaurant/otpServiceImp.js";
import otpServiceInt from "../../../../application/services/restaurant/otpServiceInt.js";
import restaurantServiceImp from "../../../services/restaurant/restaurantServiceImp.js"


const restaurant = (express) => {
    const router=express.Router()
    const controller=restaurantController(restaurantRrpositoryInf,restaurantRepositoryImp,restaurantServiceInt,restaurantServiceImp,otpServiceInt,otpServiceImp)

    router.route('/register').post(controller.verifyemail)
    router.route('/verifyotp').post(controller.otpverification)
    router.route('/create').post(controller.createrestaurant)
    router.route('/login').post(controller.login)
    router.route('/getprofile').get(controller.selectprofiledata)
    router.route('/addfood-item').post(controller.addfooditems)
    router.route('/getallfood').get(controller.selectallfooddata)
    router.route('/getallresturant').get(controller.getallresturant)
    router.route('/deletefood').post(controller.deletefooditem)
    router.route('/getsinglefood').get(controller.selectfooddata)
    router.route('/editfood-item').post(controller.updatefooditems)
    router.route('/allfoods').get(controller.searchfooditems)
    router.route('/update').post(controller.updaterestaurant)


   
    
   
  

    return router;
}

export default restaurant
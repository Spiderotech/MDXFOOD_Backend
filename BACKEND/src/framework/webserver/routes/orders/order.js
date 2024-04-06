import orderController from "../../../../adapters/controllers/orders/orderController.js";
import orderRepositoryImp from "../../../database/mongodb/repositories/orders/orderRepositoryImp.js";
import orderRepositoryInf from "../../../../application/repositories/orders/orderRepositoryInf.js";
import orderServiceImp from "../../../services/orders/orderServiceImp.js";
import orderServiceInf from "../../../../application/services/orders/orderServiceInf.js";

const orders = (express) => {
    const router=express.Router()
    const controller=orderController(orderRepositoryInf,orderRepositoryImp,orderServiceInf,orderServiceImp)

    router.route('/order').post(controller.createorder)
    router.route('/getallpendingorder').get(controller.getpendingorder)
    router.route('/getallcompleteorder').get(controller.getcompleteorder)
    router.route('/getallcompleteorder').get(controller.getcompleteorder)
    router.route('/getneworder').get(controller.getneworder)
    router.route('/getconfirmorder').get(controller.getconfirmorder)
    router.route('/confirmorder').post(controller.confirmorder)
    router.route('/cancelorder').post(controller.cancelorder)
    router.route('/completeorder').post(controller.completeorder)
    router.route('/getcompleteorder').get(controller.getallcompleteorder)
    router.route('/allordercount').get(controller.getallorderscount)
    router.route('/pendingordercount').get(controller.getallpendingordercount)
    router.route('/ongoingordercount').get(controller.getallongoingordercount)
    router.route('/cancelordercount').get(controller.getallcancelordercount)
    router.route('/completeordercount').get(controller.getallcompleteordercount)
    router.route('/totalrevenue').get(controller.gettotalrevenue)
    router.route('/weeklyrevenue').get(controller.getweeklyrevenue)
    router.route('/monthlyrevenue').get(controller.getmonthlyrevenue)
    router.route('/yearlyrevenue').get(controller.getyearlyrevenue)
    router.route('/dayrevenue').get(controller.getdayrevenue)
    router.route('/totalusers').get(controller.gettotalusers)
    
    
    
   
  

    return router;
}

export default orders
import authRouter from "./user/auth.js"
import restaurant from "./restaurant/restaurant.js"
import commonservice from "./commonservice.js"
import orders from "./orders/order.js"



const  routes=( app,express)=>{
    app.use('/api/v1/user',authRouter(express))
    app.use('/api/v1/restaurant',restaurant(express))
    app.use('/api/v1/service',commonservice(express))
    app.use('/api/v1/order',orders(express))
    

}
export default routes
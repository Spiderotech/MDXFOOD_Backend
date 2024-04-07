import orderdata from "../../../entities/order/order.js";
import admin from "../../../firebase/index.js"



const Createorder = async (restaurantId,userId,items,totalPrice,repositories,orderService) => {

  console.log(restaurantId,userId,items,totalPrice);
  
    try {

      

      const getorderId=await repositories.getorderid()
      const neworderId=await orderService.generateorderId(getorderId.orderId)
      const orderDetails = orderdata(restaurantId,userId,items,totalPrice,neworderId);
      const neworder = await repositories.createorder(orderDetails);


      console.log(neworder);

      

      if(neworder){
        try {
          const orderItemsString = neworder.items.map(item => `${item.name}: ${item.quantity}`).join(', ');
        const body = `Order ID: ${neworder.orderId}\nTotal Price: $${neworder.totalPrice}\nItems: ${orderItemsString}`;

        const message = {
            notification: {
                title: 'New Order Arrived', 
                body: body, 
            },
            token:neworder.restaurantId.fcmToken,
        };
  
          await  admin.messaging().send(message);    
  
          console.log('Test message sent successfully!');
      } catch (error) { 
          console.error('Error sending test message:', error);
      }
      } 

     
    

      
  
      
  
      return { status: true };
    } catch (error) {
      console.error("Error creating new order:", error.message);
      return { status: false, message: error.message };
    }
  };
  
  export default Createorder;
import admin from "../../../firebase/index.js"

const Cancelorder =async (Id,repositories) => {


    try {

        const orderdata =await repositories.cancelorder(Id)

        console.log(orderdata,"data");
        if (orderdata.userId.fcmToken) {

            const message = {
                notification: {
                    title: 'Order Canceled',
                    body: 'Your Order is Canceled..'
                },
                token:orderdata.userId.fcmToken
            };

            await admin.messaging().send(message);

            console.log('Test message sent successfully!');

        }
       
       

        return { status: true }

    } catch {
        return { message: 'Error getting user order', status: false };

    }

    
  



}

export default Cancelorder

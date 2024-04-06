import admin from "../../../firebase/index.js"

const Completeorder =async (Id,repositories) => {

    try {

        const orderdata =await repositories.completeorderstauschange(Id)

        console.log(orderdata,"data");
        if (orderdata.userId.fcmToken) {

            const message = {
                notification: {
                    title: 'Order ready to take',
                    body: 'This is a test notification from Firebase Admin SDK!'
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

export default Completeorder

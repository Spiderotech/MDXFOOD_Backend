import admin from "../../../firebase/index.js"

const Confirmorder = async (Id, repositories) => {

    try {

        const orderdata = await repositories.confirmorderstauschange(Id)

        console.log(orderdata, "data");
        console.log(orderdata.userId.fcmToken);
        if (orderdata.userId.fcmToken) {

            const message = {
                notification: {
                    title: 'Order confirm',
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

export default Confirmorder

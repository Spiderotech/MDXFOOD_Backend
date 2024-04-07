import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAR_A-ejQUekMcDVsPyfEPyo9b6dOSlUc4",
    authDomain: "mdx-food-app.firebaseapp.com",
    projectId: "mdx-food-app",
    storageBucket: "mdx-food-app.appspot.com",
    messagingSenderId: "27273793549",
    appId: "1:27273793549:web:b8e08925c2472d7db08544",
    measurementId: "G-69PYLF20GT"
};

const firebaseApp = initializeApp(firebaseConfig);

const messaging = getMessaging(firebaseApp);



export const requestForToken = async () => {
    try {
      let currentToken = localStorage.getItem('fcmToken');
      if (currentToken) {
        console.log("Client Token (from localStorage):", currentToken);
        return currentToken;
      } else {
        currentToken = await getToken(messaging, { vapidKey:'BP_WSuDplavlAe6nJiQC4pCtFDKEyPebApdT-W0HO_5KEfr1EjFK62eVwmXd_QXvvJQH3rg4hHXvY6JuNElrvWU'})
        if (currentToken) {
          console.log("Client Token (generated):", currentToken);
          localStorage.setItem('fcmToken', currentToken);
          return currentToken;
        } else {
          console.log('No registration token available. Request permission to generate one.');
          return null;
        }
      }
    } catch (err) {
      console.error('An error occurred while retrieving token. ', err);
      return null;
    }
  };


export const onMessageListener = () => {
    console.log("working");
    return new Promise((resolve, reject) => {
        onMessage(messaging, (payload) => {
            console.log("On message payload....", payload);
            resolve(payload);
        });
    });
}

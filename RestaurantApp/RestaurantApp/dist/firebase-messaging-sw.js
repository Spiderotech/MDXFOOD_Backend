importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');



const firebaseConfig = {
    apiKey: "AIzaSyAR_A-ejQUekMcDVsPyfEPyo9b6dOSlUc4",
    authDomain: "mdx-food-app.firebaseapp.com",
    projectId: "mdx-food-app",
    storageBucket: "mdx-food-app.appspot.com",
    messagingSenderId: "27273793549",
    appId: "1:27273793549:web:b8e08925c2472d7db08544",
    measurementId: "G-69PYLF20GT"
};


firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,notificationOptions);
});



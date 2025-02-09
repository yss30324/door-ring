// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
  apiKey: "AIzaSyDAtc-bmRRAIdchAj3diwV3nYkRPzIfXkM",
  authDomain: "doorring-abd1a.firebaseapp.com",
  databaseURL: "https://doorring-abd1a-default-rtdb.firebaseio.com",
  projectId: "doorring-abd1a",
  storageBucket: "doorring-abd1a.appspot.com",
  messagingSenderId: "135920861263",
  appId: "1:135920861263:web:c32e01aa9f3e1312e02a3a",
  measurementId: "G-J6QPQSKTD4"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Notification';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

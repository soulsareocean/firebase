importScripts('https://www.gstatic.com/firebasejs/4.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.7.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.7.0/firebase.js');

var config = {
    apiKey: "AIzaSyDtfDX6ZbWHalyzqpX98oPa0tJYybNS0p8",
    authDomain: "clickclient-777df.firebaseapp.com",
    databaseURL: "https://clickclient-777df.firebaseio.com",
    projectId: "clickclient-777df",
    storageBucket: "clickclient-777df.appspot.com",
    messagingSenderId: "494991363689"
  };
  firebase.initializeApp(config);
const messaging = firebase.messaging();

firebase.messaging();

self.addEventListener('notificationclick', function(event) {
    const target = event.notification.data.click_action || '/';
    event.notification.close();

    // This looks to see if the current is already open and focuses if it is
    event.waitUntil(clients.matchAll({
        type: 'window',
        includeUncontrolled: true
    }).then(function(clientList) {
        // clientList always is empty?!
        for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == target && 'focus' in client) {
                return client.focus();
            }
        }
    
        return clients.openWindow(target);
    }));
});

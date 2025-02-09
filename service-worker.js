// service-worker.js
self.addEventListener('push', function(event) {
  const notificationData = event.data.json();
  console.log('Push received: ', notificationData);

  const title = notificationData.notification.title;
  const options = {
    body: notificationData.notification.body,
    icon: 'icon.png',  // 可以自定義通知的圖示
    badge: 'badge.png' // 可選的小圖標
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://your-website-url.com')  // 點擊通知後開啟的網頁
  );
});

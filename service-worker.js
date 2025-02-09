self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Doorbell Alert', {
      body: data.body || 'Someone pressed the button!',
      icon: 'icon.png',
      tag: 'doorbell-notification'  // 確保不會多次顯示相同通知
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  clients.openWindow('sound.html');  // 開啟 B 網站
});

// 監聽推播事件 (Push Event)
self.addEventListener('push', function(event) {
  const notificationData = event.data.json();  // 解析推播訊息的 JSON 資料
  console.log('Push received:', notificationData);

  const title = notificationData.notification.title;  // 通知標題
  const options = {
    body: notificationData.notification.body  // 通知內容
  };

  // 顯示通知
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// 監聽通知點擊事件 (Notification Click Event)
self.addEventListener('notificationclick', function(event) {
  event.notification.close();  // 關閉通知
  event.waitUntil(
    clients.openWindow('https://yss30324.github.io')  // 替換為你的網站網址
  );
});

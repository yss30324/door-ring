self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Doorbell Alert', {
      body: data.body || 'Someone pressed the button!',
      icon: 'icon.png'
    })
  );
});

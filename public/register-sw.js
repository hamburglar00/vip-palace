if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then((registration) => {
        if (navigator.serviceWorker.controller) {
        } else {
        }

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;

          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              window.location.reload();
            }
          });
        });
      })
      .catch((error) => {
      });
  });
}

function checkServiceWorker() {
  if (navigator.serviceWorker.controller) {
  } else {
  }
}

setTimeout(checkServiceWorker, 1000);

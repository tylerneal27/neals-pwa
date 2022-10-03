const installButton = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  installButton.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
installButton.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    console.log('Made it here!');
    return;
  }

  promptEvent.prompt();
  
  window.deferredPrompt = null;
  
  installButton.classList.toggle('hidden', true);
});

// TODO: Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (_event) => {
  window.deferredPrompt = null;
});

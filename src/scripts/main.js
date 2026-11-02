const welcomeButton = document.querySelector('#welcome-button');
const statusMessage = document.querySelector('#status');

welcomeButton.addEventListener('click', () => {
  statusMessage.textContent = 'Your app is ready. Start building!';
});

// Chat widget functionality
document.getElementById('chat-button').addEventListener('click', function() {
    const chatPopup = document.getElementById('chat-popup');
    if (chatPopup.style.display === 'none' || chatPopup.style.display === '') {
      chatPopup.style.display = 'flex';  // Show the popup
    } else {
      chatPopup.style.display = 'none';  // Hide the popup if already shown
    }
  });
  
  document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('chat-popup').style.display = 'none';  // Close when clicking "X"
  });
  
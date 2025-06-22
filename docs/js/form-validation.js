document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();
  
  if (!name) {
    alert('Please enter your name');
    return;
  }
  
  if (!email.includes('@')) {
    alert('Please enter a valid email');
    return;
  }
  
  if (message.length < 10) {
    alert('Message should be at least 10 characters');
    return;
  }
  
  alert('Message sent successfully!');
  this.reset();
});
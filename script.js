// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }
  
  // Show thank you message
  formMessage.textContent = `Thank you, ${name}! I'll get back to you soon.`;
  formMessage.classList.add('success');
  
  // Reset form
  contactForm.reset();
  
  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.classList.remove('success');
  }, 5000);
});

// Counter App
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment-btn');

incrementBtn.addEventListener('click', function() {
  count++;
  countDisplay.textContent = count;
});
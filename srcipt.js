
function toggleMenu() {
    const menu = document.querySelector('.menu-link');
    const icon = document.querySelector('.hamburger-icon');
    
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const description = document.getElementById('description').value;
  
        // Email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
          alert('Invalid email address');
          return;
        }
  
        // Send email using EmailJS
        const serviceID = 'service_1vajund';
        const templateID = 'template_0hbu9wy';
        const userID = 'yOnGsAucxMZeEto5k';
  
        emailjs.sendForm(serviceID, templateID, contactForm, userID)
          .then((response) => {
            console.log('Email sent successfully:', response);
            alert('Thank you for contacting me!');
            contactForm.reset();
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
          });
      });
    } else {
      console.error('Contact form not found');
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.btn-primary');

    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
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

            // Create the mailto link
            const subject = `New message from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
            const mailtoLink = `mailto:maneth17122004@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

            // Open the default email client
            window.location.href = mailtoLink;
            
            // Reset the form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! Your email client will open.');
        });
    }
});

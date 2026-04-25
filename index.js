function downloadCV(){
     window.open("files/Clayton_CV_latest.pdf", "_blank");
}
function showContact(){
    window.location.href="#contacts";
}
function getUrl(){
    window.location.href="https://mentormenteeconnect2.web.app/"
}

// Handle FormSubmit AJAX and clear form fields automatically
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent standard page redirect
            const btn = this.querySelector('.submitBtn');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            
            fetch(this.action, {
                method: 'POST',
                body: new FormData(this),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    btn.innerText = "Message Sent!";
                    btn.style.background = "linear-gradient(135deg, #10b981, #059669)"; // Success Green
                    this.reset();
                    
                    // Reset the button visually back to normal after 3.5 seconds
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = "";
                    }, 3500);
                } else {
                    btn.innerText = "Error - Try Again";
                    btn.style.background = "linear-gradient(135deg, #ef4444, #b91c1c)"; // Error Red
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.style.background = "";
                    }, 3500);
                }
            }).catch(error => {
                btn.innerText = "Error - Try Again";
                btn.style.background = "linear-gradient(135deg, #ef4444, #b91c1c)";
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "";
                }, 3500);
            });
        });
    }
});
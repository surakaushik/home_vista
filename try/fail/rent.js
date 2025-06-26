document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display a success message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p>Thank you for signing up, ${username}! You will receive a confirmation email at ${email}.</p>`;
    
    // Clear the form
    document.getElementById('registrationForm').reset();
});

// Modal functionality
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');

document.getElementById('signupBtn').onclick = function() {
    signupModal.style.display = "block";
}

document.getElementById('loginBtn').onclick = function() {
    loginModal.style.display = "block";
}

document.getElementById('closeSignup').onclick = function() {
    signupModal.style.display = "none";
}

document.getElementById('closeLogin').onclick = function() {
    loginModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
}
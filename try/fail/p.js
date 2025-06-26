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

// Automatic sliding functionality
const galleryContainer = document.querySelector('.gallery-container');
const totalImages = galleryContainer.children.length;
let currentIndex = 0;

function slideGallery() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the first image
    const offset = -currentIndex * 20; // Calculate offset
    galleryContainer.style.transform = `translateX(${offset}%)`; // Move the gallery
}

// Start automatic sliding every 2 seconds
let slideInterval = setInterval(slideGallery, 2000);

// Pause sliding on hover
galleryContainer.addEventListener('mouseover', () => {
    clearInterval(slideInterval); // Stop the interval
});

galleryContainer.addEventListener('mouseout', () => {
    slideInterval = setInterval(slideGallery, 2000); // Restart the interval
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
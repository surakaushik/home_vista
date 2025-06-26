// Function to open property details modal
function openPropertyDetails(title, location, price, details) {
    document.getElementById('propertyTitle').innerText = title;
    document.getElementById('propertyLocation').innerText = `Location: ${location}`;
    document.getElementById('propertyPrice').innerText = `Price: ${price}`;
    document.getElementById('propertyDetails').innerText = details;

    // Show the modal
    document.getElementById('propertyModal').style.display = "block";
}

// Close property modal functionality
document.getElementById('closeModal').onclick = function() {
    document.getElementById('propertyModal').style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === document.getElementById('propertyModal')) {
        document.getElementById('propertyModal').style.display = "none"; // Close property modal
    }
};

// Sign Up Modal Functionality
const signupModal = document.getElementById('signupModal');
const closeSignup = document.getElementById('closeSignup');

document.getElementById('signupBtn').onclick = function() {
    signupModal.style.display = "block";
};

closeSignup.onclick = function() {
    signupModal.style.display = "none";
};

// Login Modal Functionality
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

document.getElementById('loginBtn').onclick = function() {
    loginModal.style.display = "block";
};

closeLogin.onclick = function() {
    loginModal.style.display = "none";
};

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
};

// Registration Form Submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const username = document.getElementById('username').value;

    // Display a success message
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p>Thank you for signing up, ${username}!</p>`;
    
    // Clear the form
    this.reset();
});
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

 // Function to open the property details modal
 function openPropertyDetails(title, location, price, details, images) {
    document.getElementById('propertyTitle').innerText = title;
    document.getElementById('propertyLocation').innerText = location;
    document.getElementById('propertyPrice').innerText = price;
    document.getElementById('propertyDetails').innerText = details;

    // Set the main image and thumbnails
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    
    // Clear previous thumbnails
    thumbnailsContainer.innerHTML = '';
    
    // Set the main image to the first image in the array
    mainImage.src = images[0];

    // Create thumbnail images
    images.forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = title;
        imgElement.onclick = () => changeImage(image);
        imgElement.className = 'thumbnail';
        thumbnailsContainer.appendChild(imgElement);
    });

    // Show the modal
    document.getElementById('propertyModal').style.display = "block";
}
// Function to open the modal
document.getElementById('viewDetailsBtn').onclick = function() {
    document.getElementById('propertyModal').style.display = "block";
}

// Function to close the modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('propertyModal').style.display = "none";
}

// Change main image in the gallery
function changeImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('propertyModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

        // Function to open the property details modal
        function openPropertyDetails(title, location, price, details, images) {
            document.getElementById('propertyTitle').innerText = title;
            document.getElementById('propertyLocation').innerText = location;
            document.getElementById('propertyPrice').innerText = price;
            document.getElementById('propertyDetails').innerText = details;

            // Set the main image and thumbnails
            const mainImage = document.getElementById('mainImage');
            const thumbnailsContainer = document.querySelector('.thumbnails');
            
            // Clear previous thumbnails
            thumbnailsContainer.innerHTML = '';
            
            // Set the main image to the first image in the array
            mainImage.src = images[0];

            // Create thumbnail images
            images.forEach((image) => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imgElement.alt = title;
                imgElement.onclick = () => changeImage(image);
                imgElement.className = 'thumbnail';
                thumbnailsContainer.appendChild(imgElement);
            });

            // Show the modal
            document.getElementById('propertyModal').style.display = "block";
        }

        // Function to change main image in the gallery
        function changeImage(imageSrc) {
            document.getElementById('mainImage').src = imageSrc;
        }

        // Close modal functionality
        document.getElementById('closeModal').onclick = function() {
            document.getElementById('propertyModal').style.display = "none";
        }

        // Close modal when clicking outside of it
        window.onclick = function(event) {
            const modal = document.getElementById('propertyModal');
            if (event.target === modal) {
                modal.style.display = "none";
            }
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


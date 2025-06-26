// Registration Logic
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const messageDiv = document.getElementById('message');
  messageDiv.innerHTML = `<p>Thank you for signing up, ${username}! You will receive a confirmation email at ${email}.</p>`;

  document.getElementById('registrationForm').reset();
});

// Modal Logic
const signupModal = document.getElementById('signupModal');
const loginModal = document.getElementById('loginModal');

document.getElementById('signupBtn').onclick = function () {
  signupModal.style.display = "block";
};

document.getElementById('loginBtn').onclick = function () {
  loginModal.style.display = "block";
};

document.getElementById('closeSignup').onclick = function () {
  signupModal.style.display = "none";
};

document.getElementById('closeLogin').onclick = function () {
  loginModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === signupModal) signupModal.style.display = "none";
  if (event.target === loginModal) loginModal.style.display = "none";
};

// ========== Load All User-Listed Properties ==========
document.addEventListener("DOMContentLoaded", function () {
  const propertyList = document.querySelector(".property-list");

  // Loop through all localStorage entries
  for (let key in localStorage) {
    if (key.startsWith("property_user_")) {
      try {
        const prop = JSON.parse(localStorage.getItem(key));
        if (prop) {
          const html = `
            <div class="property-card">
              <img src="${prop.images?.[0] || 'fallback.jpg'}" />
              <h2>${prop.type} - ${prop.bhk} BHK</h2>
              <p>Price: ₹${prop.expectedPrice} (${prop.negotiable})</p>
              <p>${prop.amenities}</p>
              <button class="buy-button view-btn" data-id="${prop.id}">View</button>
            </div>`;
          propertyList.insertAdjacentHTML("afterbegin", html);
        }
      } catch (err) {
        console.error("Error parsing property:", key);
      }
    }
  }

  // Handle view button clicks
  propertyList.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-btn")) {
      const propertyId = e.target.dataset.id;
      window.open(`view.html?id=${propertyId}`, "_blank");
    }
  });
});

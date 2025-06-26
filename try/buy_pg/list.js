const steps = document.querySelectorAll(".form-step");
let currentStep = 0;

document.querySelectorAll(".next-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
  })
);

document.querySelectorAll(".prev-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
  })
);

const form = document.getElementById("propertyForm");
const previewContainer = document.getElementById("preview-container");
const imagesInput = document.getElementById("images");

const formDataLive = {
  images: []
};

form.addEventListener("input", updatePreview);
imagesInput.addEventListener("change", function () {
  const files = this.files;
  formDataLive.images = [];
  [...files].forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      formDataLive.images.push(reader.result);
      updatePreview();
    };
    reader.readAsDataURL(file);
  });
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Assign unique ID
  const propId = "property_user_" + Date.now();
  formDataLive.id = propId;

  // Save property to localStorage
  localStorage.setItem(propId, JSON.stringify(formDataLive));

  // Optional: keep a list of all custom property IDs
  let userProps = JSON.parse(localStorage.getItem("userPropertyIds")) || [];
  userProps.push(propId);
  localStorage.setItem("userPropertyIds", JSON.stringify(userProps));

  // Redirect to buy page
  window.location.href = "buy.html";
});


function updatePreview() {
  const data = new FormData(form);

  formDataLive.listingType = data.getAll("listingType");
  formDataLive.expectedPrice = data.get("expectedPrice");
  formDataLive.negotiable = data.get("negotiable") ? "Yes" : "No";
  formDataLive.bhk = data.get("bhk");
  formDataLive.bathrooms = data.get("bathrooms");
  formDataLive.area = data.get("area");
  formDataLive.type = data.get("type");
  const checkedAmenities = data.getAll("amenities");
  const customAmenities = data.get("customAmenities")?.split(",").map(a => a.trim()).filter(Boolean) || [];
  formDataLive.amenities = [...checkedAmenities, ...customAmenities].join(", ");

  formDataLive.maplink = data.get("maplink");
  formDataLive.address = data.get("address");

  previewContainer.innerHTML = `
    <div class="preview-card">
      <h3>${formDataLive.bhk} BHK ${formDataLive.type}</h3>
      <p><strong>For:</strong> ${formDataLive.listingType?.join(", ")}</p>
      <p><strong>Price:</strong> ₹${formDataLive.expectedPrice} (${formDataLive.negotiable})</p>
      <p><strong>Bathrooms:</strong> ${formDataLive.bathrooms}</p>
      <p><strong>Area:</strong> ${formDataLive.area} sqft</p>
      <p><strong>Amenities:</strong> ${formDataLive.amenities}</p>
      <p><strong>Address:</strong> ${formDataLive.address}</p>
      <p><a href="${formDataLive.maplink}" target="_blank">📍 Open in Google Maps</a></p>
      <div>${formDataLive.images.map(img => `<img src="${img}" />`).join("")}</div>
    </div>
  `;
}

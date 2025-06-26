document.addEventListener("DOMContentLoaded", function () {
  const propertyList = document.querySelector(".property-list");

  // Scan localStorage for all properties
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("property_user_")) {
      const prop = JSON.parse(localStorage.getItem(key));

      // Check if property is listed for rent
      if (prop.listingType && prop.listingType.includes("rent")) {
        const html = `
          <div class="property-card">
            <img src="${prop.images?.[0] || 'https://via.placeholder.com/400x300'}" />
            <h2>${prop.type} - ${prop.bhk} BHK</h2>
            <p>Price: ₹${prop.expectedPrice} (${prop.negotiable})</p>
            <p>${prop.amenities}</p>
            <button class="buy-button view-btn" data-id="${prop.id}">View</button>
          </div>`;
        propertyList.insertAdjacentHTML("beforeend", html);
      }
    }
  });

  // Attach View button click handler
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-btn")) {
      const propertyId = e.target.dataset.id;
      window.open(`view.html?id=${propertyId}`, "_blank");
    }
  });
});

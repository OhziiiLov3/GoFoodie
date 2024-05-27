// hamburger toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const logo = document.querySelector("#page-logo");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  logo.classList.toggle("show");
});

// Function to handle Map
/* Docs for OpenstreetMap- https://leafletjs.com/examples/quick-start/ */

const initMap = () => {
  // location to center the map(lat & long)
  let location = [18.3419, -64.9307];
  // create a map object
  let map = L.map("map").setView(location, 13);

  // Set up the OSM layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker at the specified location
  let marker = L.marker(location)
    .addTo(map)
    .bindPopup("Pick your location")
    .openPopup();

  // Function to get coodirnates using OMS

  // Function to handle click events on the map
  //   const onMapClick = (e)=> {
  //     // Update the marker position to the clicked location
  //     marker
  //       .setLatLng(e.latlng)
  //       .bindPopup("New location: " + e.latlng.toString())
  //       .openPopup();
  //   }

  //   // Add click event listener to the map
  //   map.on("click", onMapClick);

  /* use fetch- reverse geocode coordinates to obtain the corresponding address or location name */

  const onMapClick = (e) => {
    // Reverse geocode the clicked coordinates to obtain the location name
    fetch( `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the location name from the API response
        const locationName = data.display_name;
        // Update the marker popup with the location name
        marker
          .setLatLng(e.latlng)
          .bindPopup("New location: " + locationName)
          .openPopup();
      })
      .catch((error) =>
        console.error("Error fetching location details:", error)
      );
  };

  // Add click event listener to the map
  map.on("click", onMapClick);
};

// Initialize the map once the document is fully loaded
document.addEventListener("DOMContentLoaded", initMap);

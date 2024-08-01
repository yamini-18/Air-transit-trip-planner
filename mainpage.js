// Function to handle form submission
document.getElementById('transitForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const transitHour = parseInt(document.getElementById('transitHour').value);
  const departureTime = document.getElementById('departureTime').value;

  if (transitHour && departureTime) {
    getUserLocation()
      .then(userLocation => {
        return getNearbyPlaces(userLocation, transitHour);
      })
      .then(places => {
        // Calculate available places based on transit hour and departure time
        const availablePlaces = calculateAvailablePlaces(places, transitHour, departureTime);
        displayAvailablePlaces(availablePlaces);
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    alert('Please enter transit hour and departure time.');
  }
});

// Function to get user's current location using HTML5 geolocation
function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          resolve(userLocation);
        },
        error => {
          reject('Geolocation error: ' + error.message);
        }
      );
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
}

// Function to get nearby places using Google Places API
function getNearbyPlaces(userLocation, transitHour) {
  return new Promise((resolve, reject) => {
    // Implement fetching nearby places using Google Places API here
    // Use the userLocation and transitHour to fetch nearby tourism places
    // Example: Perform an API call to Google Places API to fetch nearby places
    
    // For example purposes, let's create a mock array of places
    const mockPlaces = [
      { name: 'Place 1', distance: '0.5 km', time: '10 mins' },
      { name: 'Place 2', distance: '1.2 km', time: '15 mins' },
      // Add more mock places with distance and time info
    ];
    resolve(mockPlaces);
  });
}

// Function to calculate available places based on transit hour and departure time
function calculateAvailablePlaces(places, transitHour, departureTime) {
  // Implement the logic to calculate available places based on transit hour and departure time
  // Use the fetched places, transitHour, and departureTime to calculate available places
  
  // For example purposes, let's filter places randomly as a mock calculation
  const availablePlaces = places.filter(place => place.distance <= (transitHour * 10)); // Mock filter logic
  return availablePlaces;
}

// Function to display available places on the page
function displayAvailablePlaces(availablePlaces) {
  const placesList = document.getElementById('placesList');

  if (availablePlaces.length === 0) {
    placesList.innerHTML = '<p>No available places found within your transit hour.</p>';
  } else {
    const placesHTML = availablePlaces.map(place => `
      <div class="place">
        <h2>${place.name}</h2>
        <p><strong>Distance:</strong> ${place.distance}</p>
        <p><strong>Time to reach:</strong> ${place.time}</p>
      </div>
    `).join('');
    placesList.innerHTML = placesHTML;
  }
}

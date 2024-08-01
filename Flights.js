document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('flightForm');
  const flightCardsContainer = document.getElementById('flightCardsContainer');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulate form submission and fetch flight data
    const formData = new FormData(form);
    const searchData = {};
    formData.forEach((value, key) => {
      searchData[key] = value;
    });

    // Call a function to fetch flight data based on search criteria
    fetchFlightData(searchData)
      .then(flightData => {
        // Display flight data in cards
        displayFlightData(flightData);
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
      });
  });

  // Function to fetch flight data (Replace with actual API call)
  function fetchFlightData(searchData) {
    return new Promise((resolve, reject) => {
      // Simulate fetching flight data (Replace with actual API call)
      setTimeout(() => {
        // Sample flight data (Replace with actual data)
        const flightData = [
          { image: 'flight1.jpg', location: 'New York', price: '$500' },
          { image: 'flight2.jpg', location: 'Paris', price: '€450' },
          { image: 'flight3.jpg', location: 'Tokyo', price: '¥60000' }
          // Add more flight data as needed
        ];
        resolve(flightData);
      }, 1000);
    });
  }

  // Function to display flight data in cards
  function displayFlightData(flightData) {
    flightCardsContainer.innerHTML = '';
    flightData.forEach(flight => {
      const card = createFlightCard(flight);
      flightCardsContainer.appendChild(card);
    });
  }

  // Function to create flight card
  function createFlightCard(flight) {
    const card = document.createElement('div');
    card.classList.add('flight-card');

    const image = document.createElement('img');
    image.src = flight.image;
    image.alt = flight.location;

    const content = document.createElement('div');
    content.classList.add('flight-card-content');

    const title = document.createElement('h3');
    title.textContent = flight.location;

    const price = document.createElement('p');
    price.textContent = 'Price: ' + flight.price;

    content.appendChild(title);
    content.appendChild(price);

    card.appendChild(image);
    card.appendChild(content);

    return card;
  }
});

function showExploreField() {
  const exploreField = document.getElementById('exploreField');
  const hotelField = document.getElementById('hotelField');

  // Hide hotel field if it was previously shown
  hideElement(hotelField);

  // Show explore field
  showElement(exploreField);
}

function showHotelField() {
  const exploreField = document.getElementById('exploreField');
  const hotelField = document.getElementById('hotelField');

  // Hide explore field if it was previously shown
  hideElement(exploreField);

  // Show hotel field
  showElement(hotelField);
}


function hideElement(element) {
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = 'block';
}


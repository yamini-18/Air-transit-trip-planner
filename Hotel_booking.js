document.getElementById('hotelForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate form fields
  const hotelName = document.getElementById('hotelName').value;
  const country = document.getElementById('country').value;
  const state = document.getElementById('state').value;
  const city = document.getElementById('city').value;
  const fromDate = document.getElementById('fromDate').value;
  const toDate = document.getElementById('toDate').value;
  const rooms = document.getElementById('rooms').value;
  const adults = document.getElementById('adults').value;
  const children = document.getElementById('children').value;
  const fullName = document.getElementById('fullName').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;

  if (!hotelName || !country || !state || !city || !fromDate || !toDate || !rooms || !adults || !fullName || !phone || !email) {
    alert('Please fill in all fields.');
    return;
  }else {
    // If the form is valid, submit the data
    submitFormData();
  }

 // Function to submit form data to the server
 function submitFormData() {
  // You can send form data to the server using AJAX or fetch API
  // Here, I'm just displaying a notification message
  const notification = document.getElementById("notification");
  notification.style.display = "block";
}
 // Clear form fields
 document.getElementById('hotelName').value = '';
 document.getElementById('country').value = '';
 document.getElementById('state').value = '';
 document.getElementById('city').value = '';
 document.getElementById('fromDate').value = '';
 document.getElementById('toDate').value = '';
 document.getElementById('rooms').value = '';
 document.getElementById('adults').value = '';
 document.getElementById('children').value = '';
 document.getElementById('fullName').value = '';
 document.getElementById('phone').value = '';
 document.getElementById('email').value = '';
});

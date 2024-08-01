function previewImage(event) {
    const input = event.target;
    const reader = new FileReader();
  
    reader.onload = function() {
      const profileImage = document.getElementById('profileImage');
      profileImage.src = reader.result;
    };
  
    reader.readAsDataURL(input.files[0]);
  }
  
  function editUsername() {
    const username = prompt('Enter new username:');
    if (username !== null) {
      document.getElementById('username').innerText = username;
    }
  }
  
  function toggleFields() {
    const indianRadio = document.getElementById('indianRadio');
    const aadhaarGroup = document.getElementById('aadhaarGroup');
    const passportGroup = document.getElementById('passportGroup');
    const nationalitySelect = document.getElementById('nationalitySelect');
  
    if (indianRadio.checked) {
      aadhaarGroup.style.display = 'block';
      passportGroup.style.display = 'none';
      nationalitySelect.style.display = 'none';
    } else {
      aadhaarGroup.style.display = 'none';
      passportGroup.style.display = 'block';
      nationalitySelect.style.display = 'block';
    }
  }
  
  function saveProfile(event) {
    event.preventDefault();
    // Implement logic to save profile data
    alert('Profile saved!');
  }
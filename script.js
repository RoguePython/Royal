document.addEventListener('DOMContentLoaded', function() {
  // Get modals and close buttons
  const signinModal = document.getElementById('signin-popup');
  const signupModal = document.getElementById('signup-popup');
  const closeButtons = document.querySelectorAll('.modal .close');
  
  // Toggle modals when clicking on links
  document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    signinModal.style.display = 'none';
    signupModal.style.display = 'block';
  });
  
  document.getElementById('show-signin').addEventListener('click', function(e) {
    e.preventDefault();
    signupModal.style.display = 'none';
    signinModal.style.display = 'block';
  });
  
  // Add event listeners to all close buttons
  closeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Hide both modals when a close button is clicked
      signinModal.style.display = 'none';
      signupModal.style.display = 'none';
    });
  });
});
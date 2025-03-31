// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get references to elements
  const messageButton = document.getElementById('messageButton');
  const messageModal = document.getElementById('messageModal');
  const closeModal = document.getElementById('closeModal');
  const closeModalButton = document.getElementById('closeModalButton');
  
  // Function to open the modal
  function openModal() {
    messageModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }
  
  // Function to close the modal
  function closeModalFunction() {
    messageModal.classList.remove('open');
    document.body.style.overflow = ''; // Re-enable scrolling
  }
  
  // Event listeners for opening and closing the modal
  messageButton.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModalFunction);
  closeModalButton.addEventListener('click', closeModalFunction);
  
  // Close modal when clicking outside of it
  messageModal.addEventListener('click', function(event) {
    if (event.target === messageModal) {
      closeModalFunction();
    }
  });
  
  // Close modal when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && messageModal.classList.contains('open')) {
      closeModalFunction();
    }
  });
  
  // Add some RKO animation effects
  const rkoImage = document.querySelector('.rko-img');
  const rkoBanner = document.querySelector('.rko-banner');
  
  // Add hover effect to the RKO image
  if (rkoImage) {
    rkoImage.addEventListener('mouseenter', function() {
      rkoBanner.style.backgroundColor = '#b91c1c'; // Darker red on hover
    });
    
    rkoImage.addEventListener('mouseleave', function() {
      rkoBanner.style.backgroundColor = '#dc2626'; // Return to original color
    });
  }
});
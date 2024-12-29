
const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const slideMenu = document.getElementById('slideMenu');

  // Open Menu
  menuButton.addEventListener('click', () => {
    slideMenu.classList.add('active');
  });

  // Close Menu
  closeButton.addEventListener('click', () => {
    slideMenu.classList.remove('active');
  });

  function showPopup(title, description) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    popup.classList.add('active');
    document.querySelector('.overlay').classList.add('active');
  }

  // Function to hide popup
  function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
  }
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
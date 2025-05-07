document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    navbarToggle.addEventListener('click', function() {
      navbarToggle.classList.toggle('active');
      navbarMenu.classList.toggle('active');
    });
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
      
      dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close other open dropdowns
        dropdowns.forEach(otherDropdown => {
          if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
            otherDropdown.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target) && dropdown.classList.contains('active')) {
          dropdown.classList.remove('active');
        }
      });
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navbarMenu.classList.contains('active')) {
          navbarToggle.classList.remove('active');
          navbarMenu.classList.remove('active');
        }
      });
    })
})
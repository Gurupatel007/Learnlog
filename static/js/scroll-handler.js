document.addEventListener('DOMContentLoaded', function() {
  // Get all links with hash
  const links = document.querySelectorAll('a[href*="#"]');
  
  // Loop through each link
  for (const link of links) {
    link.addEventListener('click', function(e) {
      // Only prevent default if the link is an internal hash link
      const href = this.getAttribute('href');
      if (href.startsWith('#') || (href.includes('#') && href.startsWith('/'))) {
        const targetId = href.includes('#') ? href.split('#')[1] : href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Scroll to the target element
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
          });
          
          // Update URL without reloading the page
          if (history.pushState) {
            history.pushState(null, null, href);
          } else {
            location.hash = href;
          }
        }
      }
    });
  }
});

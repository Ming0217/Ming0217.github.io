// dl-menu options
$(function () {
  $('#dl-menu').dlmenu({
    animationClasses: { classin: 'dl-animate-in', classout: 'dl-animate-out' }
  });
});
// Need this to show animation when go back in browser
window.onunload = function () { };

// Add lightbox class to all image links
$("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

// FitVids options
$(function () {
  $(".content").fitVids();
});

// Detect homepage immediately (runs before DOM ready)
function isHomepage() {
  return window.location.pathname === '/' || window.location.pathname === '/index.html';
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

function isTablet() {
  return window.innerWidth > 768 && window.innerWidth <= 1024 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Add homepage class immediately
if (isHomepage()) {
  document.documentElement.classList.add('home');
  // Add to body when it's available
  if (document.body) {
    document.body.classList.add('home');
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.classList.add('home');
    });
  }
}

// All others
$(document).ready(function () {
  
  // Only initialize Vanta.js on homepage and non-mobile devices
  if (typeof VANTA !== 'undefined' && !isMobile() && isHomepage()) {
    var vantaEffect;
    
    function getDocumentHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        window.innerHeight
      );
    }
    
    if (isTablet()) {
      // Tablet: Simplified Net effect
      vantaEffect = VANTA.NET({
        el: "body",
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: getDocumentHeight(),
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f51b5,
        backgroundColor: 0x0a0a23,
        points: 4.00,           // Fewer points for better performance
        maxDistance: 20.00,     // Shorter connections
        spacing: 22.00          // More spacing
      });
    } else {
      // Desktop: Full Net effect
      vantaEffect = VANTA.NET({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: getDocumentHeight(),
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3f51b5,        // Deep blue network lines
        backgroundColor: 0x0a0a23,  // Deep space dark blue
        points: 8.00,           // Number of connection points
        maxDistance: 25.00,     // Maximum distance for connections
        spacing: 18.00          // Spacing between points
      });
    }
    
    // Update Vanta.js size when window resizes
    function updateVantaSize() {
      if (vantaEffect && vantaEffect.resize) {
        vantaEffect.resize();
      }
    }
    
    // Listen for window resize
    window.addEventListener('resize', updateVantaSize);
    
    // Update size after page load
    setTimeout(updateVantaSize, 1000);
  }
  // Mobile: Uses theme's default styling

  // zoom in/zoom out animations
  if ($(".container").hasClass('fadeOut')) {
    $(".container").removeClass("fadeOut").addClass("fadeIn");
  }
  if ($(".wrapper").hasClass('fadeOut')) {
    $(".wrapper").removeClass("fadeOut").addClass("fadeIn");
  }
  $(".zoombtn").click(function () {
    $(".container").removeClass("fadeIn").addClass("fadeOut");
    $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
  });
  // go up button
  $.goup({
    trigger: 500,
    bottomOffset: 10,
    locationOffset: 20,
    containerRadius: 0,
    containerColor: '#fff',
    arrowColor: '#000',
    goupSpeed: 'normal'
  });
  $('.image-popup').magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 300, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open. 
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade'
  });
});

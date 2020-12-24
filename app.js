// Owl Carousel
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });
});

$(document).ready(function () {
  $('.testimonial-carousel').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,
    autoplayHoverPause: true,
  });
});

// Smooth Scrolling
$('.navbar a, .btn').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// ////////////////////////////////////////
// ELEMENTS
const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLi = document.querySelectorAll('.nav-links li');
const navLiArr = Array.from(navLi);

// On Scroll
const bodyScroll = () => {
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
  });
};

// Nav slide in
const navSlide = () => {
  // Toggle Nav
  hamburger.addEventListener('click', () => {
    // Show
    navLinks.classList.toggle('show');
    // Animate links
    navLiArr.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // Burger
    hamburger.classList.toggle('toggle');
  });
};

// Remove show
const removeShow = () => {
  navLiArr.forEach((li) => {
    li.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      hamburger.classList.toggle('toggle');
      navLiArr.forEach((li) => {
        li.style.animation = '';
      });
    });
  });
};

navSlide();
bodyScroll();
removeShow();

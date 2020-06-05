document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  document.querySelector(".menu-trigger").addEventListener("click", function (event) {
    if (event.target.classList.contains("active", "slide")) {
      event.target.classList.remove("active", "slide");
      document.querySelector(".main-menu").classList.remove("active");
      document.querySelector(".nav-active").classList.remove("slide");
    } else {
      event.target.classList.add("active");
      document.querySelector(".main-menu").classList.add("active");
      event.target.classList.add("slide");
      document.querySelector(".nav-active").classList.add("slide");
    }
  });
  document.querySelector(".multi").addEventListener("click", function (event) {
    if (event.target.classList.contains("active")) {
      event.target.classList.remove("active");
      document.querySelector(".sub-menu").classList.remove("active");
    } else {
      event.target.classList.add("active");
      document.querySelector(".sub-menu").classList.add("active");
    }
  });

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  $(document).ready(function () {
    var checkWidth = $(document).width();

    if (checkWidth <= 600) {
      $(".product-description").owlCarousel({
        loop: true,
        items: 1,
        navText: ["<span></span>", "<span></span>"],
        nav: true,
        mouseDrag: true,
      });
    }
  });

  $(document).ready(function () {
    var checkWidth = $(document).width();

    if (checkWidth <= 600) {
      $(".member-carousel").owlCarousel({
        loop: true,
        items: 1,
        navText: ["<span></span>", "<span></span>"],
        nav: true,
        mouseDrag: true,
      });
    }
  });

  $(".main-banner").owlCarousel({
    loop: true,
    items: 1,
    navText: ["<span></span>", "<span></span>"],
    nav: true,
    mouseDrag: false,
  });

  $(".face-slider").owlCarousel({
    loop: true,
    items: 1,
    navText: ["<span></span>", "<span></span>"],
    nav: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });

  $(".pricing-grid-container").owlCarousel({
    loop: true,
    items: 4,
    navText: ["<span></span>", "<span></span>"],
    nav: true,
    mouseDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 4,
      },
    },
  });
});

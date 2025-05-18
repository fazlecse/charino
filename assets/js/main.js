"use strict";
// toggleSideMenu start
const toggleSideMenu = () => {
  document.body.classList.toggle("toggle-sidebar");
};
// toggleSideMenu end

// add bg to nav
if ($("nav").length) {
  const header = document.querySelector("nav");

  function toggleHeaderActive() {
    header.classList.toggle("active", window.scrollY >= 100);
  }

  // Run once on scroll
  window.addEventListener("scroll", toggleHeaderActive);

  // Run once on page load
  window.addEventListener("load", toggleHeaderActive);
}

$(document).ready(function () {
  // testimonial carousel start
  $(".testimonial-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      375: {
        items: 2,
        nav: true,
        dots: false,
        dotsEach: 2,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      992: {
        items: 4,
        nav: true,
        dots: false,
      },
      1400: {
        items: 3,
        nav: true,
        dots: false,
      },
    },
  });
  // testimonial carousel end

  // testimonial carousel2 start
  $(".testimonial-carousel2").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-angle-left'></i>",
      "<i class='fa-regular fa-angle-right'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      375: {
        items: 2,
        nav: true,
        dots: false,
        dotsEach: 2,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      992: {
        items: 4,
        nav: true,
        dots: false,
      },
      1400: {
        items: 1,
        nav: false,
        dots: true,
      },
    },
  });
  // testimonial carousel2 end

  // testimonial carousel3 start
  $(".testimonial-carousel3").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      375: {
        items: 2,
        nav: true,
        dots: false,
        dotsEach: 2,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      992: {
        items: 4,
        nav: true,
        dots: false,
      },
      1400: {
        items: 1,
        nav: true,
        dots: false,
      },
    },
  });
  // testimonial carousel3 end

  // donation carousel start
  $(".donation-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      375: {
        items: 2,
        nav: true,
        dots: false,
        dotsEach: 2,
      },
      768: {
        items: 3,
        nav: true,
        dots: false,
      },
      992: {
        items: 4,
        nav: true,
        dots: false,
      },
      1400: {
        items: 4,
        nav: true,
        dots: false,
      },
    },
  });
  // donation carousel end

  // donation carousel start
  $(".hero-donation-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 3,
      },
      375: {
        items: 1,
        nav: true,
        dots: false,
        dotsEach: 2,
      },
      768: {
        items: 1,
        nav: true,
        dots: false,
      },
      992: {
        items: 1,
        nav: true,
        dots: false,
      },
      1400: {
        items: 1,
        nav: true,
        dots: true,
      },
    },
  });
  // donation carousel end

  // hero carousel start
  $(".hero-carousel").owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        dotsEach: 3,
      },
      375: {
        items: 1,
        nav: false,
        dots: true,
        dotsEach: 2,
      },
      768: {
        items: 1,
        nav: false,
        dots: true,
      },
      992: {
        items: 1,
        nav: true,
        dots: false,
      },
    },
  });
  // hero carousel end

  // case carousel start
  $(".cause-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 2000,
    // nav: false,
    // rtl: true,
    navText: [
      "<i class='fa-regular fa-arrow-left-long'></i>",
      "<i class='fa-regular fa-arrow-right-long'></i>",
    ],
    // rtl: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
        dotsEach: 3,
      },
      375: {
        items: 1,
        nav: false,
        dots: true,
        dotsEach: 2,
      },
      768: {
        items: 1,
        nav: false,
        dots: true,
      },
      992: {
        items: 2,
        nav: true,
        dots: false,
      },
    },
  });
  // case carousel end

  // cmn select2 start
  $(".cmn-select2").select2();
  // cmn select2 end

  // cmn-select2 with image start
  $(".cmn-select2-image").select2({
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // cmn-select2 with image end

  // Modal select2 with image start
  $(".modal-select2-image").select2({
    dropdownParent: $("#formModal"),
    templateResult: formatState,
    templateSelection: formatState,
  });
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "assets/img/mini-flag";
    var $state = $(
      '<span><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    var baseUrl = "assets/img/mini-flag";
    var $state = $('<span><img class="img-flag" /> <span></span></span>');

    $state.find("span").text(state.text);
    $state
      .find("img")
      .attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".svg");

    return $state;
  }
  // MOdal select2 with image end

  // Cmn select2 tags start
  $(".cmn-select2-tags").select2({
    tags: true,
  });
  // Cmn select2 tags end

  // cmn select2 modal start
  $(".modal-select2").select2({
    dropdownParent: $("#formModal"),
  });
  // cmn select2 modal start
  // Range area start
  if ($(".js-range-slider").length) {
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 100,
      from: 800,
      to: 500,
      grid: true,
    });
  }
  // Range area end
  if ($("#myID").length) {
    flatpickr("#myID", {
      inline: true,
      dateFormat: "d-m-Y",
    });
  }
  if ($("#myID2").length) {
    flatpickr("#myID2", {
      altInput: true,
      dateFormat: "YYYY-MM-DD",
      altFormat: "DD-MM-YYYY",
      allowInput: true,
    });
    const flatpickrInstance = $("#myID2").flatpickr();
    $(".calendar-icon").on("click", function () {
      flatpickrInstance.open();
    });
  }

  if ($("#player").length) {
    const player = new Plyr("#player", {
      keyboard: {
        global: true,
      },
    });
  }
  // Nice select start
  if ($(".nice-select").length) {
    $(".nice-select").niceSelect();
  }
  // Nice select end
  // Circle progress start
  if ($(".circle").length) {
    $(".first.circle")
      .circleProgress({
        value: 0.7,
        size: 48,
        fill: {
          gradient: ["#00715D"],
        },
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("span")
          .html(Math.round(70 * progress) + "<i>%</i>");
        $(this).find("span").addClass("percent");
      });
  }
  if ($(".circle").length) {
    $(".second.circle")
      .circleProgress({
        value: 0.8,
        size: 48,
        fill: {
          gradient: ["#00715D"],
        },
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("span")
          .html(Math.round(80 * progress) + "<i>%</i>");
        $(this).find("span").addClass("percent");
      });
  }
  if ($(".circle").length) {
    $(".three.circle")
      .circleProgress({
        value: 0.6,
        size: 48,
        fill: {
          gradient: ["#00715D"],
        },
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find("span")
          .html(Math.round(60 * progress) + "<i>%</i>");
        $(this).find("span").addClass("percent");
      });
  }
  // Circle progress start
  AOS.init();
});

// Fancybox carousel section start
if ($(".fancybox-carousel-section").length) {
  // Initialise Carousel
  const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    Dots: false,
  });

  // Thumbnails
  const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    Sync: {
      target: mainCarousel,
      friction: 0,
    },
    Dots: false,
    Navigation: false,
    center: true,
    slidesPerPage: 1,
    infinite: true,
  });

  // Customize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    Carousel: {
      on: {
        change: (that) => {
          mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });
}
// Fancybox carousel section end

// Tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// Counter start
if ($(".statistics-counter").length) {
  $(".statistics-counter").counterUp({
    delay: 10,
    time: 2000,
  });
}
// Copy text start
function copyTextFunc() {
  const element = document.querySelector(".docs-code");
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);
}
// Copy text end

// Social share start
if ($("#shareBlock").length) {
  $("#shareBlock").socialSharingPlugin({
    urlShare: window.location.href,
    description: $("meta[name=description]").attr("content"),
    title: $("title").text(),
  });
}
// Social share end

// International Telephone Input start
if ($("#telephone").length) {
  const input = document.querySelector("#telephone");
  window.intlTelInput(input, {
    initialCountry: "bd",
    separateDialCode: true,
  });
}
// International Telephone Input end

// Copy page url start
if ($("#copyBtn").length) {
  document.getElementById("copyBtn").addEventListener("click", () => {
    let referralURL = document.getElementById("referralURL");
    referralURL.select();
    navigator.clipboard.writeText(referralURL.value);
    if (referralURL.value) {
      document.getElementById("copyBtn").innerHTML =
        '<i class="fa-regular fa-circle-check"></i> Copied';
      setTimeout(() => {
        document.getElementById("copyBtn").innerHTML =
          '<i class="fa-regular fa-copy"></i>copy';
      }, 1000);
    }
  });
}

// Copy page url end

// input field show hide password start
if (document.querySelector(".password-box")) {
  const passwordBoxes = document.querySelectorAll(".password-box");
  passwordBoxes.forEach((passwordBox) => {
    const passwordInput = passwordBox.querySelector(".password");
    const passwordIcon = passwordBox.querySelector(".password-icon");

    passwordIcon.addEventListener("click", function () {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.add("fa-eye-slash");
        passwordIcon.classList.remove("fa-eye");
      } else {
        passwordInput.type = "password";
        passwordIcon.classList.add("fa-eye");
        passwordIcon.classList.remove("fa-eye-slash");
      }
    });
  });
}
// input field show hide password end

// Custom dropdown start
document.addEventListener("DOMContentLoaded", function () {
  function toggleDropdownAttributes() {
    const dropdowns = document.querySelectorAll(".custom-dropdown > a"); // Select all dropdown links

    dropdowns.forEach((dropdown) => {
      if (window.innerWidth >= 992) {
        dropdown.removeAttribute("role");
        dropdown.removeAttribute("data-bs-toggle");
        dropdown.removeAttribute("aria-expanded");
      } else {
        dropdown.setAttribute("role", "button");
        dropdown.setAttribute("data-bs-toggle", "dropdown");
        dropdown.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Run on page load
  toggleDropdownAttributes();

  // Run on window resize
  window.addEventListener("resize", toggleDropdownAttributes);
});
// Custom dropdown end

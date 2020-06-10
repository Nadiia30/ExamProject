// ==== mobile-menu =====
const menuButton = $(".menu-button");
const mobileMenu = $(".mobile-menu");

$(document).on("click", ".menu-button", handleMenu);
$(document).on("click", ".is-submenu", handleToggleMenu);

function handleToggleMenu(e) {
  e.preventDefault();
  const $this = $(this);
  $this
    .parent(".has-submenu")
    .toggleClass("opened")
    .siblings("li")
    .removeClass("opened")
    .find("ul")
    .hide();

  $this.next("ul").slideToggle(500, function () {
    $(this).find(".has-submenu").removeClass("opened").children("ul").hide();
  });
}

function resetMobileMenu() {
  mobileMenu.removeClass("visible");
  $(".mobile-nav .has-submenu").removeClass("opened").find("ul").hide();
}

function handleMenu(e) {
  e.preventDefault();
  $(this).children("svg").toggleClass("hidden");
  mobileMenu.toggleClass("visible");
}

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  resetMobileMenu();
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

// ==== slick slider =====
$(function () {
  $(".slider").slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: ".container_dots",
    dotsClass: "dots-box",
  });
});

// ==== open-close surf paradise find out more===
$(() => {
  const aboutParadise = $(".surfers-paradise-toggle");
  const paradiseBtn = $(".surfers-paradise-btn");
  aboutParadise.hide();
  paradiseBtn.text = "Find out more";

  $(document).on("click", ".surfers-paradise-btn", (e) => {
    const $this = $(e.target);
    aboutParadise.slideToggle(function () {
      const words = aboutParadise.is(":hidden")
        ? "Find out more"
        : "Close more";
      $this.text(words);
    });
  });
});

// ==== open-close experience find out more ====
$(() => {
  const expSaying = $(".experts-saying");
  const expertsBtn = $(".expertsBtn");
  expSaying.hide();
  expertsBtn.text = "Find out more";

  $(document).on("click", ".expertsBtn", (e) => {
    const $this = $(e.target);
    expSaying.slideToggle(function () {
      const words = expSaying.is(":hidden") ? "Find out more" : "Close more";
      $this.text(words);
    });
  });
});

// ===== open-close location more info =====
$(() => {
  const locationInfo = $(".locationInfo");
  const locationBtn = $(".locationBtn");
  locationInfo.hide();
  locationBtn.text("Find out more");

  $(document).on("click", ".locationBtn", (e) => {
    const $this = $(e.target);
    locationInfo.slideToggle(function () {
      const words = locationInfo.is(":hidden") ? "Find out more" : "Close more";
      $this.text(words);
    });
  });
});

// ==== google-maps =====

// let map;
// const cnt = { lat: 32.802353, lng: -117.241676 };

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: cnt,
//     zoom: 10,
//   });

//   const marker = new google.maps.Marker({
//     position: cnt,
//     map,
//     title: "San Diego, California",
//     icon: "i/map1.png",
//   });

//   const infowindow = new google.maps.InfoWindow({
//     content: "Pacific Beach, San Diego, California",
//   });
//   marker.addListener("click", function () {
//     infowindow.open(map, marker);
//   });
// }

// document.getElementById("roadmap").onclick = function () {
//   map.setMapTypeId("roadmap");
// };

// document.getElementById("satellite").onclick = function () {
//   map.setMapTypeId("satellite");
// };

// ===== show-hide team-info ======
const teamInfo1 = $("#info1");
const posVert1 = $("#member1");
const teamInfo2 = $("#info2");
const posVert2 = $("#member2");
const teamInfo3 = $("#info3");
const posVert3 = $("#member3");
const teamInfo4 = $("#info4");
const posVert4 = $("#member4");

$(document).on("click", "#member1", showInfo);
$(document).on("click", "#info1", hideInfo);
$(document).on("click", "#member2", showInfo);
$(document).on("click", "#info2", hideInfo);
$(document).on("click", "#member3", showInfo);
$(document).on("click", "#info3", hideInfo);
$(document).on("click", "#member4", showInfo);
$(document).on("click", "#info4", hideInfo);
function showInfo() {
  const $this = $(this);
  $this.addClass("hidden");
  $this.siblings("article").removeClass("invisible");
}
function hideInfo() {
  const $this = $(this);
  $this.addClass("invisible");
  $this.siblings("p").removeClass("hidden");
}

// ===== testimonials-slider ======
$(function () {
  $("#testimonials-slider").slick({
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    vertical: true,
    arrows: true,
    prevArrow:
      "<div class='testimonials-arrow testimonials-arrow_prev'>p</div>",
    nextArrow:
      "<div class='testimonials-arrow testimonials-arrow_next'>n</div>",
  });
});

// === instagram-row-slider =====

$(function () {
  const config = {
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    dots: false,
    arrows: false,
    centerPadding: "50px",
    centerMode: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 686,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },

      {
        breakpoint: 1200,
        settings: "unslick",
      },
    ],
  };
  const sl = $(".instagram-row-slider").slick(config);

  $(window).on("resize", function () {
    if ($(window).width() < 1200 && !sl.hasClass("slick-initialized")) {
      $(".instagram-row-slider").slick(config);
    }
  });
});
// ==== validate newsletter-form ====
const newsletterForm = document.querySelector(".newsletter-form");

document.addEventListener("keyup", handleKeyUp);
document.addEventListener("submit", handleSubmit);

function handleKeyUp(e) {
  const target = e.target;
  if (target.dataset.validate !== "1") {
    return;
  }
  if (target.value.trim().length > 2) {
    target.nextElementSibling.textContent = "";
  } else {
    target.nextElementSibling.textContent = "This field cannot be empty";
  }
}

function handleSubmit(e) {
  const target = e.target;
  if (target.name !== "newsletter-form") {
    return;
  }
  let isValid = true;
  [...target.elements].forEach((el) => {
    if (el.dataset.validate === "1") {
      const val = el.value.trim();
      if (!val) {
        isValid = false;
        el.nextElementSibling.textContent = "This field cannot be empty";
      }
    }
  });
  if (!isValid) {
    e.preventDefault();
  }
  newsletterForm.email.value = "";
}

// ====scroll-top ===

let interval;
function step() {
  window.scrollBy(0, -5);
  const st = window.pageYOffset;
  if (st > 0) {
    interval = requestAnimationFrame(step);
    return;
  }
  cancelAnimationFrame(interval);
}

document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.id !== "scroll-top") return;
  interval = requestAnimationFrame(step);
});

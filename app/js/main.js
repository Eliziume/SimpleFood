$(function () {

  $(".menu a, .logo, .promo__btn, footer__nav a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({
      scrollTop: top
    }, 1500);
  });

  $(".reviews__slider").slick({
    infinite: false,
    dots: true,
    arrows: true,
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: false,
      },
    }, ],
  });

  $(window).on("load resize", function () {
    if ($(window).width() < 768) {
      $(".restaurants__list:not(.slick-initialized)").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToScroll: 1,
      });
    } else {
      $(".restaurants__list.slick-initialized").slick("unslick");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mburger = document.querySelector(".burger--mobile");
  const mobileMenu = document.querySelector(".mobile");
  const bodyLock = document.querySelector("body");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile--active");
    if (mobileMenu.classList.contains("mobile--active")) {
      burger.classList.add("burger--active");
      mburger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      mburger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });
  mburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile--active");
    if (mobileMenu.classList.contains("mobile--active")) {
      burger.classList.add("burger--active");
      mburger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      mburger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove("burger--active");
      mobileMenu.classList.remove("mobile--active");
      bodyLock.classList.remove("lock");
    }
  });
});

var mixer = mixitup(".category__food-box");
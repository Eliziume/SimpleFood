$(function () {

  $('.select').styler();

  $(".price__slider").ionRangeSlider({
    type: "double",

    onStart: function (data) {
      $(".price-range__from").text(data.from);
      $(".price-range__to").text(data.to);
    },

    onChange: function (data) {
      $(".price-range__from").text(data.from);
      $(".price-range__to").text(data.to);
    },
  });

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

   $(window).on("load resize", function () {
     if ($(window).width() < 800) {
       $(".stock__items:not(.slick-initialized)").slick({
         arrows: false,
         dots: true,
         infinite: true,
         speed: 100,
         slidesToScroll: 1,
       });
     } else {
       $(".stock__items.slick-initialized").slick("unslick");
     }
   });


});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mburger = document.querySelector(".burger--mobile");
  const mobileMenu = document.querySelector(".mobile");
  const bodyLock = document.querySelector("body");
  const catalogBtn = document.querySelector(".catalog-products__btn");
  const filterMenu = document.querySelector(".mobile-catalog");
  const close = document.querySelector(".close");


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

  catalogBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("mobile-catalog--active");
    if (filterMenu.classList.contains("mobile-catalog--active")) {
      catalogBtn.classList.add("catalog-products__btn--active");
      close.classList.add("catalog-products__btn--active");
      bodyLock.classList.add("lock--mobile-catalog");
    } else {
      catalogBtn.classList.remove("catalog-products__btn--active");
      close.classList.remove("catalog-products__btn--active");
      bodyLock.classList.remove("lock--mobile-catalog");
    }
  });



  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('mobile--active');
      bodyLock.classList.remove('lock');
    }
  });

   document.addEventListener('click', function (e) {
     if (e.target !== catalogBtn && e.target !== filterMenu) {
       catalogBtn.classList.remove('catalog-products__btn--active');
       filterMenu.classList.remove('mobile-catalog--active');
       bodyLock.classList.remove('lock--mobile-catalog');
     }
   });


});

var mixer = mixitup(".category__food-box");
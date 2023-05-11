$(function () {

  class ItcTabs {
    constructor(target, config) {
      const defaultConfig = {};
      this._config = Object.assign(defaultConfig, config);
      this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
      this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
      this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
      this._eventShow = new Event('tab.itc.change');
      this._init();
      this._events();
    }
    _init() {
      this._elTabs.setAttribute('role', 'tablist');
      this._elButtons.forEach((el, index) => {
        el.dataset.index = index;
        el.setAttribute('role', 'tab');
        this._elPanes[index].setAttribute('role', 'tabpanel');
      });
    }
    show(elLinkTarget) {
      const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
      const elLinkActive = this._elTabs.querySelector('.tabs__btn--active');
      const elPaneShow = this._elTabs.querySelector('.tabs__pane--show');
      if (elLinkTarget === elLinkActive) {
        return;
      }
      elLinkActive ? elLinkActive.classList.remove('tabs__btn--active') : null;
      elPaneShow ? elPaneShow.classList.remove('tabs__pane--show') : null;
      elLinkTarget.classList.add('tabs__btn--active');
      elPaneTarget.classList.add('tabs__pane--show');
      this._elTabs.dispatchEvent(this._eventShow);
      elLinkTarget.focus();
    }
    showByIndex(index) {
      const elLinkTarget = this._elButtons[index];
      elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
      this._elTabs.addEventListener('click', (e) => {
        const target = e.target.closest('.tabs__btn');
        if (target) {
          e.preventDefault();
          this.show(target);
        }
      });
    }
  }

  // инициализация .tabs как табов
  new ItcTabs('.tabs');

  $(".rating").rateYo({
    readOnly: true,
    starWidth: "16px",
    ratedFill: "#FFB800",
    normalFill: "#ececec"

  });

  $('.select').styler();
  $('.foodstuff__input').styler();

  var $range = $("#price-filter__slider");
  var $inputFrom = $("#price-filter__range-from");
  var $inputTo = $("#price-filter__range-to");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 100;
  var to = 1000;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });

  $(".menu__link--contacts, .footer__logo, .promo__btn, footer__nav a").on("click", function (e) {
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

  $(".foodstuff__slider").slick({
    infinite: false,
    dots: false,
    arrows: true
  });

  $(".others__slider").slick({
    infinite: false,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 3
        }
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },

      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false
        }
      },
    ]
  });

  $(window).on("load resize", function () {
    if ($(window).width() < 768) {
      $(".restaurants__list:not(.slick-initialized)").slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 100,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [{
          breakpoint: 560,
          settings: {
            slidesToShow: 1
          }
        }, ]
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
        slidesToShow: 2,

        responsive: [{
          breakpoint: 560,
          settings: {
            slidesToShow: 1
          }
        }, ]
      });
    } else {
      $(".stock__items.slick-initialized").slick("unslick");
    }
  });

  const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    preload: 2,
    Dots: false,
  });

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    closeButton: "top",
    Carousel: {
      Dots: true,
      on: {
        change: (that) => {
          myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });


});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mburger = document.querySelector(".burger--mobile");
  const mobileMenu = document.querySelector(".mobile");
  const bodyLock = document.querySelector("body");
  const catalogBtn = document.querySelector(".catalog-products__btn");
  const filterMenu = document.querySelector(".catalog-products__filtres");
  const close = document.querySelector(".close");


  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile--active");
    if (mobileMenu.classList.contains("mobile--active")) {
      mburger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    }
  });

  mburger.addEventListener("click", () => {
    mobileMenu.classList.remove("mobile--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('mobile--active');
      bodyLock.classList.remove('lock');
    }
  });

  catalogBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("catalog-products__filtres--active");
    if (filterMenu.classList.contains("catalog-products__filtres--active")) {
      catalogBtn.classList.add("catalog-products__btn--active");
      bodyLock.classList.add("lock--mobile-catalog");
    }
  });

  close.addEventListener("click", () => {
    filterMenu.classList.remove("catalog-products__filtres--active");
    bodyLock.classList.remove("lock--mobile-catalog");
  })

  document.addEventListener('click', function (e) {
    if (e.target !== catalogBtn && e.target !== filterMenu) {
      catalogBtn.classList.remove('catalog-products__btn--active');
      filterMenu.classList.remove('catalog-products__filtres--active');
      bodyLock.classList.remove('lock--mobile-catalog');
    }
  });
});

var mixer = mixitup(".category__food-box");
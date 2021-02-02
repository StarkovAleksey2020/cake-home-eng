"use strict";
$(document).ready(function () {
  const translate = document.querySelectorAll(".translate");
  const mainTitle = document.querySelector(".main-title");
  const header = document.querySelector("header");
  const headerLogoIcon = document.querySelector(".header-logo-icon");
  const headerLogoTitle = document.querySelector(".header-logo-title");
  const headerMenuBtn = document.querySelector(".menu-btn");
  const headerMenuBasket = document.querySelector(".menu-basket");
  const headerMenuBasketCountBlock = document.querySelector(".menu-basket-count-block");
  const headerMenuBasketCount = document.querySelector(".menu-basket-count");
  const headerMenuBtnClose = document.querySelector(".menu-close");
  const headerMenuLink = document.getElementsByClassName("header-menu-link");
  const shadow = document.querySelector(".shadow");
  const headerBackground = document.querySelector(".header-background");

  let headerHeight = header.offsetHeight;

  window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    let color0 = "brightness(0) saturate(100%) invert(99%) sepia(2%) saturate(915%) hue-rotate(345deg) brightness(93%) contrast(95%)";
    let color1 = "brightness(0) saturate(100%) invert(78%) sepia(8%) saturate(172%) hue-rotate(15deg) brightness(95%) contrast(87%)";
    let color2 = "brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(1223%) hue-rotate(157deg) brightness(80%) contrast(75%)";
    let color3 = "brightness(0) saturate(100%) invert(48%) sepia(5%) saturate(221%) hue-rotate(22deg) brightness(95%) contrast(92%)";
    let color4 = "brightness(0) saturate(100%) invert(44%) sepia(0%) saturate(3935%) hue-rotate(170deg) brightness(81%) contrast(92%)";
    let color5 = "brightness(0) saturate(100%) invert(29%) sepia(6%) saturate(176%) hue-rotate(21deg) brightness(92%) contrast(88%)";
    let color6 = "brightness(0) saturate(100%) invert(18%) sepia(1%) saturate(2588%) hue-rotate(21deg) brightness(106%) contrast(85%)";
    let color7 = "brightness(0) saturate(100%) invert(19%) sepia(0%) saturate(5851%) hue-rotate(142deg) brightness(81%) contrast(89%)";
    let color8 = "brightness(0) saturate(100%) invert(7%) sepia(17%) saturate(25%) hue-rotate(314deg) brightness(97%) contrast(90%)";
    let color9 = "brightness(0) saturate(100%) invert(13%) sepia(18%) saturate(0%) hue-rotate(156deg) brightness(94%) contrast(99%)";

    let colorCountBackground = "brightness(0) saturate(100%) invert(47%) sepia(81%) saturate(381%) hue-rotate(357deg) brightness(98%) contrast(99%)";
    let colorCount = "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7489%) hue-rotate(237deg) brightness(104%) contrast(103%)";

    translate.forEach(element => {
      let speed = element.dataset.speed;
      element.style.transform = `translateY(${scroll * speed}px)`;

      mainTitle.style.opacity = -scroll / (headerHeight / 1.5) + 1;
      shadow.style.opacity = scroll / headerHeight;
      headerBackground.style.opacity = scroll / headerHeight;
      if (scroll < 80) {
        headerLogoTitle.style.color = "#E7E6DD";
        for (let item of headerMenuLink) {
          item.style.color = "#E7E6DD";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color0; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color0; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color0; }
        
      } else if (scroll > 80 && scroll < 120) {
        headerLogoTitle.style.color = "#B9B8B1";
        for (let item of headerMenuLink) {
          item.style.color = "#B9B8B1";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color1; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color1; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color1; }

      } else if (scroll > 120 && scroll < 180) {
        headerLogoTitle.style.color = "#94938E";
        for (let item of headerMenuLink) {
          item.style.color = "#94938E";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color2; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color2; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color2; }
        
      } else if (scroll > 180 && scroll < 240) {
        headerLogoTitle.style.color = "#767672";
        for (let item of headerMenuLink) {
          item.style.color = "#767672";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color3; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color3; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color3; }
        
      } else if (scroll > 240 && scroll < 300) {
        headerLogoTitle.style.color = "#5E5E5B";
        for (let item of headerMenuLink) {
          item.style.color = "#5E5E5B";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color4; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color4; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color4; }
        
      } else if (scroll > 300 && scroll < 360) {
        headerLogoTitle.style.color = "#4B4B49";
        for (let item of headerMenuLink) {
          item.style.color = "#4B4B49";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color5; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color5; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color5; }
        
      } else if (scroll > 360 && scroll < 420) {
        headerLogoTitle.style.color = "#3C3C3A";
        for (let item of headerMenuLink) {
          item.style.color = "#3C3C3A";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color6; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color6; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color6; }
        
      } else if (scroll > 420 && scroll < 480) {
        headerLogoTitle.style.color = "#30302E";
        for (let item of headerMenuLink) {
          item.style.color = "#30302E";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color7; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color7; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color7; }
        
      } else if (scroll > 480 && scroll < 540) {
        headerLogoTitle.style.color = "#1E1E1E";
        for (let item of headerMenuLink) {
          item.style.color = "#1E1E1E";
        }
        if (headerMenuBtn) { headerMenuBtn.style.filter = color8; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color8; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color8; }
        
      } else if (scroll > 540) {
        headerLogoTitle.style.color = "#000000";
        for (let item of headerMenuLink) {
          item.style.color = "#000000";
        }

        if (headerMenuBtn) { headerMenuBtn.style.filter = color9; }
        if (headerMenuBasket) { headerMenuBasket.style.filter = color9; }
        if (headerMenuBtnClose) { headerMenuBtnClose.style.filter = color9; }
      }
      headerMenuBasketCountBlock.style.backgroundColor = colorCountBackground;
      headerMenuBasketCountBlock.style.color = "#FFFFFF";
    });
  });

  // обработка мобильного меню
  var menuButton = $(".menu-btn");
  var menuButtonClose = $(".menu-close");
  var goTopButton = $("#button");
  var navbarMenuItem = $(".navbar-menu__link");

  navbarMenuItem.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  });
  menuButton.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  });
  menuButtonClose.on('click', function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    menuButton.toggleClass("hiden");
    menuButtonClose.toggleClass("hiden");
    goTopButton.toggleClass("hiden");
  });

  // кнопка возврата в начало страницы
  var btn = $('#button');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

  //валидация email
  jQuery.validator.addMethod("emailfull", function(value, element) {
    return this.optional(element) || /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(value);
  }, "Please enter valid email address!");

  // Обработка форм
  $('.form').each(function () {
    $(this).validate({
      rules: {
        email: {
          required: true,
          email: true,
          emailfull: true
        },
        phone: {
          required: true,
          minlength:18
        }
      },
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста укажите ваше имя",
          minlength: "Минимальная длина поля 2 символа",
        },
        phone: {
          required: "Пожалуйста укажите ваш номер телефона",
          minlength: "Минимальная длина поля 10 символов",
        },
        email: {
          required: "Пожалуйста укажите ваш email",
          email: "Формат email - name@domain.com",
        },
      },
    });
  });

  // Маска номера телефона
  $(".phoneInput").mask("+7 (999) 999-99-99");

  // Модальное окно со слайдером с сертификатами
  var modalSertificateButton = $('[data-toggle=modal-certificate]');
  var closeModalButton = $(".menu-close-certificate");
  var modalOverlay = $(".modal-certificate__overlay");

  function openModalSertificate() {
    var modalOverlay = $(".modal-certificate__overlay");
    var modalDialog = $(".modal-certificate__dialog");
    var closeModalButton = $(".menu-close-certificate");
    closeModalButton.addClass("menu-close-certificate--visible");
    modalOverlay.addClass("modal-certificate__overlay--visible");
    modalDialog.addClass("modal-certificate__dialog--visible");
  }
  function closeModalSertificate(event) {
    event.preventDefault();
    var modalOverlay = $(".modal-certificate__overlay");
    var modalDialog = $(".modal-certificate__dialog");
    var closeModalButton = $(".menu-close-certificate");
    closeModalButton.removeClass("menu-close-certificate--visible");
    modalOverlay.removeClass("modal-certificate__overlay--visible");
    modalDialog.removeClass("modal-certificate__dialog--visible");
  }

  modalSertificateButton.on('click', openModalSertificate);
  closeModalButton.on('click', closeModalSertificate);
  modalOverlay.on('click', closeModalSertificate);

  var certificatesSlider = new Swiper('.certificates-slider', {
    // Optional parameters
    loop: true,
    navigation: {
      prevEl: '.certificates-buttons__left',
      nextEl: '.certificates-buttons__right',
    },
  });

  // обработка нажатия ESC
  function closeModal(event) {
    event.preventDefault();
    $('input').val('');
    $('textarea').val('');
    $("input").removeClass("invalid");
    $("label").remove(".invalid");
  }
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      closeModal(e);
      closeModalSertificate(e);
    }
  });

});
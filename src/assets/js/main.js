var mySwiper = new Swiper('.swiper-container', {

  duration: 500,
  loop: true,
  slidesPerView: 1,
  // cssMode: true,

  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

var swiper2 = new Swiper('.swiper-container2', {
  autoplay: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  loop: true,
});

var swiper3 = new Swiper('.swiper-container3', {
  autoplay: true,
  slidesPerView: 3,
  loop: true,
  effect: 'coverflow',
  slidesOffsetBefore: 205,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    568: {
      slidesPerView: 3,
      slidesOffsetBefore: 205,

    },
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 0,
      // coverflowEffect: {
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: false,
      // },
    }
  }
});

$('.names').on('click', function () {
  const officeBlock = $(this).parent().next();
  const officeIcon = $(this).children();
  if (officeBlock.is(':hidden')) {
    officeBlock.slideDown('slow');
    officeIcon.css('transform', 'rotate(180deg)');
  } else {
    officeBlock.hide('slow');
    officeIcon.css('transform', '');
  }
})

$(function () {
  $('.about__license').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
  });
});


// Menu
var announ = $('#announ'); /* page Announ */
var menu = $('.menu');
var backgroundColor = $('#overlay'); /* overlay */
var body = $('body'); /* body */
var announPage = $('#page'); /* announ page */
var register = $('#register'); /* register */
var registerBtn = $('#registerBtn'); /* registerBtn */
var registerClose = $('#registerClose'); /* registerClose */
var registerClose2 = $('#registerClose2'); /* registerClose2 */

var registerNext = $('#registerNext'); /* registerNext */
var register2 = $('#register2'); /* register2 */

var menuBtn = $('#menu-btn');
var close = $('#menu__close');

registerNext.on('click', function () {
  register2.css('opacity', '1');
  register2.css('z-index', '999');
});

registerBtn.on('click', function () {
  register.css('opacity', '1');
  register.css('z-index', '999');
  register.css('overflow', 'hidden');
});

registerClose.on('click', function () {
  register.css('opacity', '');
  register.css('z-index', '-1');
});

registerClose2.on('click', function () {
  register2.css('opacity', '');
  register2.css('z-index', '-1');
});

menuBtn.on('click', function () {
  menu.css('transform', 'translateX(0)');
  announPage.css('position', 'static');
  backgroundColor.addClass('open');
  announ.css('z-index', '-1')
});

close.on('click', function () {
  menu.css('transform', 'translateX(100%)');
  backgroundColor.removeClass('open');
  announPage.css('position', '');
  body.css('overflow', '')
  announ.css('z-index', '9');
});

// menu Toggle 
var menuToggle = $('.menu__name');
var menuList = $('.menu__item');

menuToggle.on('click', function () {
  $(this).siblings().slideToggle('slow');
});

// login

var login = $('#login');
var cabinet = $('#cabinet');
var prevBtn = $('#prevarrow');

cabinet.on('click', function () {
  login.css('opacity', '1');
  login.css('z-index', '9');
  menu.css('opacity', '0');
  menu.css('z-index', '-1');
});

prevBtn.on('click', function () {
  menu.css('opacity', '1');
  menu.css('z-index', '9');
  login.css('opacity', '0');
  login.css('z-index', '-1');
});


// search

var search = $('#search');
var searchInput = $('#input');
var searchClose = $('#searchClose');
var searchButton = $('#button');

$('#search').click(function () {
  $(this).toggleClass('border')
  $('#input').toggleClass('show');
})

search.on('click', function () {
  search.css('display', 'none');
  searchButton.css('display', 'block');
  searchInput.addClass('show');
  searchButton.toggleClass('border')
});

searchClose.on('click', function () {
  searchInput.removeClass('show');
  search.css('display', 'block');
  searchButton.css('display', 'none');
  search.removeClass('border');
});



// modal
var modalBtn = $('.modalBtn');
var modalClose = $('.modal-close__icon');

$('.product__box').on('click', function (e) {
  e.preventDefault();
  var modal = $(this).next();
  modal.addClass('open');
  backgroundColor.addClass('open');
  $('.product-block__item').css('overflow', 'visible')
});

modalClose.on('click', function (e) {
  e.preventDefault();
  var modal = $(this).parent();
  modal.removeClass('open');
  console.log(modal);
  backgroundColor.removeClass('open');
  $('.product-block__item').css('overflow', 'hidden')
  body.css('overflow', '');
});


//  modal2

var modalPay = $('#modalPay');
var payBtn = $('#payBtn');
var payBtn1 = $('#payBtn1');

payBtn.on('click', function (e) {
  e.preventDefault();
  modalPay.css('z-index', '9');
  modalPay.css('opacity', '1');
  backgroundColor.addClass('open');
  body.css('overflow', 'hidden');
});

payBtn1.on('click', function (e) {

  e.preventDefault();
  modalPay.css('z-index', '9');
  modalPay.css('opacity', '1');
  backgroundColor.addClass('open');
  body.css('overflow', 'hidden');
});

modalClose.on('click', function (e) {
  e.preventDefault();
  modalPay.css('z-index', '-1');
  modalPay.css('opacity', '');
  backgroundColor.removeClass('open');
});



$('#cardNumber').on('keyup', function (e) {
  var val = $(this).val();
  var newval = '';
  val = val.replace(/\s/g, '');
  for (var i = 0; i < val.length; i++) {
    if (i % 4 == 0 && i > 0) newval = newval.concat(' ');
    newval = newval.concat(val[i]);
  }
  $(this).val(newval);
});
var prev = $('#prev');
var next = $('#next');

prev.on('click', function () {
  mySiema.prev();
});
next.on('click', function () {
  mySiema.next();
});



$(".cabinet-item__list").on("click", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest(".cabinet-block")
    .find(".tab_wrapper")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});


var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
var queue = {};
var form = $('form#uploadImages');
var imagesList = $('#uploadImagesList');
var itemPreviewTemplate = imagesList.find('.popup__item.template');
itemPreviewTemplate.removeClass('template').clone();
imagesList.find('.popup__item.template').remove();


// addImg
$('#addImages').on('change', function (e) {
  var files = this.files;
  console.log(files)
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
      alert('Фотография должна быть в формате jpg, png или gif');
      continue;
    }
    if (file.size > maxFileSize) {
      alert('Размер фотографии не должен превышать 2 Мб');
      continue;
    }
    preview(files[i]);
  }
  this.value = '';
  $('#uploadImagesList').addClass('hide');
});


// addImg-2
$('#addImages1').on('change', function (e) {
  var files = this.files;
  console.log(files)
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
      alert('Фотография должна быть в формате jpg, png или gif');
      continue;
    }
    if (file.size > maxFileSize) {
      alert('Размер фотографии не должен превышать 2 Мб');
      continue;
    }
    cabinetPhoto(files[i]);
  }
  this.value = '';

});



// Создание превью
function preview(file) {
  var reader = new FileReader();
  reader.addEventListener('load', function (event) {
    var img = document.createElement('img');
    var itemPreview = itemPreviewTemplate.clone();
    itemPreview.find('.popup__img-wrap img').attr('src', event.target.result).addClass('fuck');
    itemPreview.data('id', file.name);
    imagesList.append(itemPreview);
    queue[file.name] = file;
  });
  reader.readAsDataURL(file);
}
// Создание превью -2
// function cabinetPhoto(file) {
//   var reader = new FileReader();
  
//   reader.addEventListener('load', function (event) {
//     console.log(file);
//     $('#idOfImage').attr('src', event.target.result)
//     var itemPreview = itemPreviewTemplate.clone();
//     itemPreview.find('.popup__img-wrap2 img').attr('src', event.target.result).addClass('fuck');
//     itemPreview.data('id', file.name);
//     imagesList.append(itemPreview);
//     queue[file.name] = file;

//   });
//   reader.readAsDataURL(file);
// }

// Calculator

var range1 = $('#range-1');
var range2 = $('#range-2');
var range3 = $('#range-3');
var range4 = $('#range-4');
var range5 = $('#range-5');


var price1 = $('#price-1');
var price2 = $('#price-2');
var price3 = $('#price-3');
var price4 = $('#price-4');


var val1 = $('#val-1');
var val2 = $('#val-2');
var val3 = $('#val-3');
var val4 = $('#val-4');
var val5 = $('#val-5');

// var selectOpt = $('#select-box1');


range1.on('click', function () {
  calc()
})
range2.on('click', function () {
  calc()
})
range3.on('click', function () {
  calc()
})
range4.on('click', function () {
  calc()
})
range5.on('click', function () {
  calc()
})

$("select").on("click", function () {

  $(this).parent(".select-box").toggleClass("open");
  calc();
});

// $("select").on("click", function () {

//   $(this).parent(".select-box").toggleClass("open");

// });

$(document).mouseup(function (e) {
  var container = $(".select-box");

  if (container.has(e.target).length === 0) {
    container.removeClass("open");
  }
});


$("select").on("change", function () {

  var selection = $(this).find("option:selected").text(),
    labelFor = $(this).attr("id"),
    label = $("[for='" + labelFor + "']");
    label.find(".label-desc").html(selection);
});



$('.policyholder-input__checkbox input').on('change', function () {
  console.log(this.checked);
  if (this.checked) {
    $('.form-drop').show()
  } else {
    $('.form-drop').hide()
  }
})


// InputMAsk

$.mask.definitions['9'] = false;
$.mask.definitions['5'] = "[0-9]";

$("#dateCard").mask("55/55");
$("#date").mask("55/55/5555");
$("#datePassport").mask("55/55/5555");
$("#numberPhone").mask("+998 (55) 555-55-55");
$("#cardNumber").mask("8600 5555 5555 5555");
$('#indeksNumber').mask("555555");
$('#indeksNumber2').mask("555555");

$('#indeksCabinet').mask("555555");
$('#numerCabinet').mask("+998 (55) 555-55-55");
$("#passportCabinet").mask("55/55/5555");
$("#passportCabinet2").mask("55/55/5555");

$('#numerDirector').mask("+998 (55) 555-55-55");
$('#numerDirector2').mask("+998 (55) 555-55-55");



$(".login-form__eye").click(function () {

  $(this).toggleClass("toggle-password");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$(".register-item__eye").click(function () {

  $(this).toggleClass("toggle-password");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// apartment Tabs

$(".apartment-block__btn").on("click", function (e) {
  e.preventDefault();
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest(".apartment-block")
    .find(".tab_wrapper")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});




// indexModalCal

var indexModal = $('#indexModal')

$('.modalBtn').click(function () {
  indexModal.addClass('open');
  backgroundColor.addClass('open');
})

modalClose.on('click', function (e) {
  e.preventDefault();
  var indexModal = $(this).parent();
  indexModal.removeClass('open');
  backgroundColor.removeClass('open');
});


//registerDone

var registerDone = $('#registerDone');
var modalRegister = $('#modalRegister');

registerDone.on('click', function () {
  modalRegister.css('opacity', '0');
  modalRegister.css('z-index', '-1');
  register.css('overflow', 'auto');
  $('.overlay').hide()
});




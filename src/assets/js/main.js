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
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // centeredSlides: true,
  });

  var swiper3 = new Swiper('.swiper-container3', {
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    // centeredSlides: true,
  });


  $('.names').on('click', function () {
    const officeBlock = $(this).parent().next();
    if(officeBlock.is(':hidden')) {
    officeBlock.slideDown('slow');
      $('.office-icon').css('transform', 'rotate(180deg)');
    } else {
      officeBlock.hide('slow');
      $('.office-icon').css('transform', '');
    }
  })

  $(function() {
    $('.about__license').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
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

  registerNext.on('click', function() {
    register2.css('opacity', '1');
    register2.css('z-index', '999');
  });

  registerBtn.on('click', function() {
    register.css('opacity', '1');
    register.css('z-index', '999');
  });

  registerClose.on('click', function() {
    register.css('opacity', '');
    register.css('z-index', '-1');
  });

  registerClose2.on('click', function() {
    register2.css('opacity', '');
    register2.css('z-index', '-1');
  });

  menuBtn.on('click', function() {
    menu.css('transform', 'translateX(0)');
    body .css('overflow', 'hidden');
    announPage.css('position', 'static');
    backgroundColor.css('opacity', '1');
    backgroundColor.css('z-index', '9');

    announ.css('z-index', '-1')
  });
  
  close.on('click', function() {
    menu.css('transform', 'translateX(100%)');
    backgroundColor.css('opacity', '');
    backgroundColor.css('z-index', '-1');
    announPage.css('position', '');
    body .css('overflow', '')
    announ.css('z-index', '9');
  });

  // login
  
  var login = $('#login');
  var cabinet = $('#cabinet');
  var prevBtn = $('#prev');

  cabinet.on('click', function() {
    login.css('opacity', '1');
    login.css('z-index', '9');
    menu.css('opacity', '0');
    menu.css('z-index', '-1');
  });

  prevBtn.on('click', function() {
    menu.css('opacity', '1');
    menu.css('z-index', '9');
    login.css('opacity', '0');
    login.css('z-index', '-1');
  });


  // search

  var search = $('#search');
  var searchInput = $('#input');


  search.on('click', function () {
    search.css('opacity', '0');
    search.hide();
    searchInput.css('opacity', '1');
    searchInput.show();
  });

// modal
var modalBtn = $('.modalBtn');
var modalClose = $('.modal-close__icon');

modalBtn.on('click', function(e) {
    e.preventDefault();
  var modal = $(this).next();
  modal.css('z-index', '9');
  modal.css('opacity', '1');
  backgroundColor.css('opacity', '1');
  backgroundColor.css('z-index', '9');
  body.css('overflow', 'hidden');
});

modalClose.on('click', function(e) {
    e.preventDefault();
  var modal = $(this).parent();
  modal.css('z-index', '-1');
  modal.css('opacity', '');
  backgroundColor.css('opacity', '');
  backgroundColor.css('z-index', '-1');
  body.css('overflow', '');
});


//  modal2

var modalPay = $('#modalPay');
var payBtn = $('#payBtn');

payBtn.on('click', function(e) {
  e.preventDefault();
  modalPay.css('z-index', '9');
  modalPay.css('opacity', '1');
  backgroundColor.css('opacity', '1');
  backgroundColor.css('z-index', '9');
});

modalClose.on('click', function(e) {
  e.preventDefault(); 
  modalPay.css('z-index', '-1');
  modalPay.css('opacity', '');

  backgroundColor.css('opacity', '');
  backgroundColor.css('z-index', '-1');
});

// backgroundColor.on("click", function(e){
//   e.preventDefault();
//   modalPay.css('z-index', '-1');
//   modalPay.css('opacity', '');

//   backgroundColor.css('opacity', '');
//   backgroundColor.css('z-index', '-1');
// })




$('#cardNumber').on('keyup', function(e){
  var val = $(this).val();
  var newval = '';
  val = val.replace(/\s/g, '');
  for(var i=0; i < val.length; i++) {
      if(i%4 == 0 && i > 0) newval = newval.concat(' ');
      newval = newval.concat(val[i]);
  }
  $(this).val(newval);
});


// siema Slider
  var mySiema = new Siema({
    selector: '.siema',
    duration: 800,
    easing: 'ease',
    perPage: 1,
    startIndex: 1,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
  });

  setInterval(function() {
    mySiema.next()
  }, 5000);

  var prev = $('#prev');
  var next = $('#next');

  prev.on('click', function() {
    mySiema.prev();
  });
  next.on('click', function() {
    mySiema.next();
  });



  $('#upload').imageUploader({
    extensions: ['.jpg','.jpeg','.png','.gif','.svg'],
      mimes: ['image/jpeg','image/png','image/gif','image/svg+xml'],
      maxSize: undefined,
      maxFiles: undefined,
    
  });







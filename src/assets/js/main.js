@@include('components/image-uploader.min.js');

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
  var menu = $('.menu');
  var menuBtn = $('#menu-btn');
  var close = $('#menu__close');

  menuBtn.on('click', function() {
    menu.css('transform', 'translateX(0)');
  });
  
  close.on('click', function() {
    menu.css('transform', 'translateX(100%)');
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


  $('#upload').imageUploader({
    extensions: ['.jpg','.jpeg','.png','.gif','.svg'],
      mimes: ['image/jpeg','image/png','image/gif','image/svg+xml'],
      maxSize: undefined,
      maxFiles: undefined,
    
  });

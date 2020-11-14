
var mySwiper = new Swiper('.swiper-container', {
  
  loop: true,
  slidesPerView: 1,
    // cssMode: true,
    
    centeredSlides: true,

    autoplay: {
      delay: 3000,
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
    // autoplay: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true
  });
  
  // var menu = $('#menu-toggle');
  // var menuBlock = $("#menu-block");



  //  menu.on('click', function() {
  //     $('.menu').toggleClass('menu--active');
  //     menuBlock.toggleClass('menu__block--active');
  //  });


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
  




  


  

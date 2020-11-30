/*! Image Uploader - v1.2.3 - 26/11/2019
 * Copyright (c) 2019 Christian Bayer; Licensed MIT */
!function(e){e.fn.imageUploader=function(t){let n,i={preloaded:[],imagesInputName:"images",preloadedInputName:"preloaded",label:"Drag & Drop files here or click to browse",extensions:[".jpg",".jpeg",".png",".gif",".svg"],mimes:["image/jpeg","image/png","image/gif","image/svg+xml"],maxSize:void 0,maxFiles:void 0},a=this,s=new DataTransfer;a.settings={},a.init=function(){a.settings=e.extend(a.settings,i,t),a.each(function(t,n){let i=o();if(e(n).append(i),i.on("dragover",r.bind(i)),i.on("dragleave",r.bind(i)),i.on("drop",p.bind(i)),a.settings.preloaded.length){i.addClass("has-files");let e=i.find(".uploaded");for(let t=0;t<a.settings.preloaded.length;t++)e.append(l(a.settings.preloaded[t].src,a.settings.preloaded[t].id,!0))}})};let o=function(){let t=e("<div>",{class:"image-uploader"});n=e("<input>",{type:"file",id:a.settings.imagesInputName+"-"+h(),name:a.settings.imagesInputName+"[]",accept:a.settings.extensions.join(","),multiple:""}).appendTo(t);e("<div>",{class:"uploaded"}).appendTo(t);let i=e("<div>",{class:"upload-text"}).appendTo(t);e("<i>",{class:"iui-cloud-upload"}).appendTo(i),e("<span>",{text:a.settings.label}).appendTo(i);return t.on("click",function(e){d(e),n.trigger("click")}),n.on("click",function(e){e.stopPropagation()}),n.on("change",p.bind(t)),t},d=function(e){e.preventDefault(),e.stopPropagation()},l=function(t,i,o){let l=e("<div>",{class:"uploaded-image"}),r=(e("<img>",{src:t}).appendTo(l),e("<button>",{class:"delete-image"}).appendTo(l));e("<i>",{class:"iui-close"}).appendTo(r);if(o){l.attr("data-preloaded",!0);e("<input>",{type:"hidden",name:a.settings.preloadedInputName+"[]",value:i}).appendTo(l)}else l.attr("data-index",i);return l.on("click",function(e){d(e)}),r.on("click",function(t){d(t);let o=l.parent();if(!0===l.data("preloaded"))a.settings.preloaded=a.settings.preloaded.filter(function(e){return e.id!==i});else{let t=parseInt(l.data("index"));o.find(".uploaded-image[data-index]").each(function(n,i){n>t&&e(i).attr("data-index",n-1)}),s.items.remove(t),n.prop("files",s.files)}l.remove(),o.children().length||o.parent().removeClass("has-files")}),l},r=function(t){d(t),"dragover"===t.type?e(this).addClass("drag-over"):e(this).removeClass("drag-over")},p=function(t){d(t);let i=e(this),o=Array.from(t.target.files||t.originalEvent.dataTransfer.files),l=[];e(o).each(function(e,t){a.settings.extensions&&!g(t)||a.settings.mimes&&!c(t)||a.settings.maxSize&&!f(t)||a.settings.maxFiles&&!m(l.length,t)||l.push(t)}),l.length?(i.removeClass("drag-over"),u(i,l)):n.prop("files",s.files)},g=function(e){return!(a.settings.extensions.indexOf(e.name.replace(new RegExp("^.*\\."),"."))<0)||(alert(`The file "${e.name}" does not match with the accepted file extensions: "${a.settings.extensions.join('", "')}"`),!1)},c=function(e){return!(a.settings.mimes.indexOf(e.type)<0)||(alert(`The file "${e.name}" does not match with the accepted mime types: "${a.settings.mimes.join('", "')}"`),!1)},f=function(e){return!(e.size>a.settings.maxSize)||(alert(`The file "${e.name}" exceeds the maximum size of ${a.settings.maxSize/1024/1024}Mb`),!1)},m=function(e,t){return!(e+s.items.length+a.settings.preloaded.length>=a.settings.maxFiles)||(alert(`The file "${t.name}" could not be added because the limit of ${a.settings.maxFiles} files was reached`),!1)},u=function(t,n){t.addClass("has-files");let i=t.find(".uploaded"),a=t.find('input[type="file"]');e(n).each(function(e,t){s.items.add(t),i.append(l(URL.createObjectURL(t),s.items.length-1),!1)}),a.prop("files",s.files)},h=function(){return Date.now()+Math.floor(100*Math.random()+1)};return this.init(),this}}(jQuery);;

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

modalClose.on('click', function(e) {
   e.preventDefault(); 
  modalPay.css('z-index', '-1');
  modalPay.css('opacity', '');

  backgroundColor.css('opacity', '');
  backgroundColor.css('z-index', '-1');
});

payBtn.on('click', function(e) {
    e.preventDefault();
  modalPay.css('z-index', '9');
  modalPay.css('opacity', '1');
  backgroundColor.css('opacity', '1');
  backgroundColor.css('z-index', '9');
});


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
    duration: 1000,
    easing: 'ease',
    perPage: 1,
    startIndex: 1,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
  });

setInterval(() => mySiema.next(), 2000)




 
  


  $('#upload').imageUploader({
    extensions: ['.jpg','.jpeg','.png','.gif','.svg'],
      mimes: ['image/jpeg','image/png','image/gif','image/svg+xml'],
      maxSize: undefined,
      maxFiles: undefined,
    
  });

jQuery(document).ready(function ($) {

   //WOW
   //new WOW().init();

   //swiper slider

   var swiper = new Swiper('.swiper-1', {

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      //loop: true,
      // autoplay: {
      //    delay: 5000,
      //    disableOnInteraction: false,
      // },
      simulateTouch: true,
   });
   var swiper = new Swiper('.swiper-2', {
      slidesPerView: 4.13,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      //loop: true,
      // autoplay: {
      //    delay: 5000,
      //    disableOnInteraction: false,
      // },
      simulateTouch: true,
   });


   //lazyload
   // $(window).scroll(function () {
   //    $(".sp_lazyload").lazyload();
   // });

   // $(window).mousemove(function () {
   //    $(".sp_lazyload").lazyload();
   // });

});	
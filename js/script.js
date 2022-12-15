jQuery(document).ready(function ($) {

   $('.question-js').click(function () {
      if ($(this).hasClass('active') == false) {
         $('.question-js').removeClass('active');
         $('.answer-js').removeClass('active');
         $(this).addClass('active').next().addClass('active');
      } else {
         $(this).removeClass('active');
         $('.answer-js').removeClass('active');
      }

      return false;
   });

   $('.q-butt').click(function () {
      if ($(this).hasClass('active') == false) {
         //$('.q-butt').removeClass('active');
         //$('.card').removeClass('active');
         $(this).addClass('active');
      } else {
         $(this).removeClass('active');
         //$('.card').removeClass('active');
      }

      return false;
   });


   var swiper = new Swiper('.swiper-1', {

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      //loop: true,
      autoplay: {
         delay: 6000,
         disableOnInteraction: true,
      },
      simulateTouch: true,
   });


   var swiper = new Swiper('.swiper-2', {
      slidesPerView: 4.13,
      navigation: {
         nextEl: '.sw2n',
         prevEl: '.sw2p',
      },
      // pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      // },
      //loop: true,
      // autoplay: {
      //    delay: 5000,
      //    disableOnInteraction: false,
      // },
      simulateTouch: true,
   });

   var swiper = new Swiper('.swiper-3', {
      slidesPerView: 1,
      navigation: {
         nextEl: '.sw3n',
         prevEl: '.sw3p',
      },
      // pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      // },
      //loop: true,
      // autoplay: {
      //    delay: 5000,
      //    disableOnInteraction: false,
      // },
      simulateTouch: true,
   });


   var swiper = new Swiper('.swiper-4', {
      slidesPerView: 2.3,
      navigation: {
         nextEl: '.sw4n',
         prevEl: '.sw4p',
      },
      // pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      // },
      //loop: true,
      // autoplay: {
      //    delay: 5000,
      //    disableOnInteraction: false,
      // },
      simulateTouch: true,
   });


   var swiper = new Swiper('.swiper-5', {
      slidesPerView: 4,
      navigation: {
         nextEl: '.sw5n',
         prevEl: '.sw5p',
      },
      // pagination: {
      //    el: '.swiper-pagination',
      //    clickable: true,
      // },
      //loop: true,
      // autoplay: {
      //    delay: 5000,
      //    disableOnInteraction: false,
      // },
      simulateTouch: true,
   });



});	
"use strict"


let account = $('.header__account')
$(document).ready(function () {
   if ($('.header__burger').hasClass('active') == false) {
      $('.header__account').appendTo($('.header__menu'))
   }
   if (($(window).width() > 576.98)) {
      $('.header__account').appendTo($('.header__row'))
   }
   let s_win_w = $(window).width();
   $(window).resize(function () {
      let win_w = $(window).width();
      if (win_w >= s_win_w * 1.3 || win_w <= s_win_w * 0.7) {
         location.reload();
      }
   });
   $('.header__burger').click(function () {
      $('.header__burger, .header__menu').toggleClass('active')
      $('body').toggleClass('lock')

   })


   $(document).on('click', function (e) {
      let elem = $('.header__input.active');
      if (!elem.is(e.target) && elem.has(e.target).length === 0) {

         elem.removeClass('active');
      }
   });


   $('.header__menu').click(function (e) {
      $('.header__burger, .header__menu').removeClass('active')
   })
   $('.header__input').click(function (e) {
      $(this).toggleClass('active')
      e.stopPropagation()
      $('.header__menu').click(function (e) {
         $('.header__burger, .header__menu').removeClass('active')
         $('body').removeClass('lock')
      })
   })
})





new Swiper('.about-slider', {
   slidesPerView: 1,
   pagination: {
      el: '.about-pagination',
      clickable: true,
   },
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true
   },
})


new Swiper('.category-slider', {
   slidesPerView: 1,
   pagination: {
      el: '.category-pagination',
      clickable: true,
      renderBullet: function (index, className) {
         if (index + 1 == 1) {
            return `<span class="category-bullet ${className} ">` + "Mountain Bikes" + '</span>'
         } else if (index + 1 == 2) {
            return `<span class="category-bullet ${className} ">` + "Road Bikes" + '</span>'
         } else if (index + 1 == 3) {
            return `<span class="category-bullet ${className} ">` + "Hybrid Bikes" + '</span>'
         } else if (index + 1 == 4) {
            return `<span class="category-bullet ${className} ">` + "Kids Bikes" + '</span>'
         }
      }
   },
   spaceBetween: 20,
   allowTouchMove: false,
})

$('category-pagination').appendTo('<span class="category-text ">Kids Bikes</span>')
new Swiper('.category-slider-in', {
   slidesPerView: 1,

   pagination: {
      el: '.category-in-pagination',
      clickable: true,
      type: 'fraction'
   },
   spaceBetween: 10,
   navigation: {
      nextEl: '.category-next',
      prevEl: '.category-prev'
   },


})











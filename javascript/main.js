/**
  * isMobile
  * responsiveMenu
  * ClientCarousel
  * iconboxCarousel
  * Testimonials
  * parallax
  * flatCounter 
  * progressBar
  * portfolioIsotope
  * flatAccordion
  * goTop
  * retinaLogos       
  * removePreloader
  * searchIcon
  * flatSpacer
  * flatTabs
  * flatIsotopeCase
  * flatAccordions
*/

;(function($) {

    'use strict'
 
     var isMobile = {
         Android: function() {
             return navigator.userAgent.match(/Android/i);
         },
         BlackBerry: function() {
             return navigator.userAgent.match(/BlackBerry/i);
         },
         iOS: function() {
             return navigator.userAgent.match(/iPhone|iPad|iPod/i);
         },
         Opera: function() {
             return navigator.userAgent.match(/Opera Mini/i);
         },
         Windows: function() {
             return navigator.userAgent.match(/IEMobile/i);
         },
         any: function() {
             return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
         }
     };
 
     var responsiveMenu = function() {
         var menuType = 'desktop';
 
         $(window).on('load resize', function() {
             var currMenuType = 'desktop';
 
             if ( matchMedia( 'only screen and (max-width: 1024px)' ).matches ) {
                 currMenuType = 'mobile';
             } 
 
             if ( currMenuType !== menuType ) {
                 menuType = currMenuType;
 
                 if ( currMenuType === 'mobile' ) {
                     var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                     var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
 
                     $('#header').after($mobileMenu);
                     hasChildMenu.children('ul').hide();
                     hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                     $('.btn-menu').removeClass('active');
                 } else {
                     var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
 
                     $desktopMenu.find('.submenu').removeAttr('style');
                     $('#header').find('.nav-wrap').append($desktopMenu);
                     $('.btn-submenu').remove();
                 }
             }
         });
 
         $('.btn-menu').on('click', function() {         
             $('#mainnav-mobi').slideToggle(300);
             $(this).toggleClass('active');
         });
 
         $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
             $(this).toggleClass('active').next('ul').slideToggle(300);
             e.stopImmediatePropagation()
         });
     }
 
     var headerFixed = function() {
        if ( $('body').hasClass('header_sticky') ) {
            var nav = $('.header');
            if ( nav.length ) {
                var offsetTop = $('.header').offset().top,
                    injectSpace = $('<div />', { height: $('.header') }).insertAfter(nav);   
                    injectSpace.hide();
                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop + offsetTop) {
                        $('.header').addClass('downscrolled');
                    } else {
                        $('.header').removeClass('downscrolled');
                        injectSpace.hide();
                    }

                    if ( $(window).scrollTop() > 300 ) {
                        $('.header').addClass('header-small');
                    } else {
                        $('.header').removeClass('header-small');
                    }

                    if ( $(window).scrollTop() > 500 ) {
                        $('.header').addClass('upscrolled');
                    } else {
                        $('.header').removeClass('upscrolled');
                    }
                })
            }
        }     
    };
    
     
     var ClientCarousel = function() {
         $('.flat-row').each(function() {            
             if ( $().owlCarousel ) {
                 $(this).find('.flat-carousel').owlCarousel({
                     loop: true,
                     nav: true,
                     dots: $('.flat-carousel').data('dots'),                     
                     autoplay: $('.flat-carousel').data('auto'), 
                      margin: 30,                   
                     responsive:{
                         0:{
                             items: 1
                         },
                         320: {
                             items: 2
                         },
                         480:{
                             items: 3
                         },
                         767:{
                             items: 3
                         },
                         991:{
                             items: 4
                         },
                         1200: {
                             items: $('.flat-carousel').data('item')
                         }
                     }
                 });
             }
         });
     };
 
    
     var iconboxCarousel = function() {
         $('.iconbox-slider').each(function() {            
             if ( $().owlCarousel ) {
                 $(this).find('.slides').owlCarousel({
                     loop: true,
                     nav: true,
                     dots: false,                     
                     autoplay: $('.slides').data('auto'), 
                      margin: 0,                   
                     responsive:{
                         0:{
                             items: 1
                         },
                         320: {
                             items: 1
                         },
                         480:{
                             items: 1
                         },
                         767:{
                             items: 1
                         },
                         991:{
                             items: 3
                         },
                         1200: {
                             items: $('.slides').data('item')
                         }
                     }
                 });
             }
         });
     };
 
     var Testimonials = function() {
         $('.flat-row').each(function() {            
             if ( $().owlCarousel ) {
                 $(this).find('.flat-testimonials-post').owlCarousel({
                     loop: true,
                     nav: true,
                     dots: $('.flat-testimonials-post').data('dots'),                     
                     autoplay: $('.flat-testimonials-post').data('auto'), 
                      margin: 30,                   
                     responsive:{
                         0:{
                             items: 1
                         },
                         320: {
                             items: 1
                         },
                         480:{
                             items: 1
                         },
                         767:{
                             items: 1
                         },
                         991:{
                             items: 1
                         },
                         1200: {
                             items: $('.flat-testimonials-post').data('item')
                         }
                     }
                 });
             }
         });
     };
 
     var parallax = function() {
         if ( $().parallax && isMobile.any() === null ) {
             $('.parallax1').parallax("50%", 0.5);
             $('.parallax2').parallax("50%", 0.5);
             $('.parallax3').parallax("50%", 0.5);          
         }
     };
      
         
     var flatCounter = function() {
         if ($(document.body).hasClass('counter-scroll')) {
             var a = 0;
                 $(window).scroll(function() {
                 var oTop = $('.box').offset().top - window.innerHeight;
                     if (a === 0 && $(window).scrollTop() > oTop) {
                         if ( $().countTo ) {
                             $('.box').find('.number').each(function() {
                                 var to = $(this).data('to'),
                                     speed = $(this).data('speed');
                               
                                 $(this).countTo({
                                     to: to,
                                     speed: speed
                                 });
                             });
                         }
                     a = 1;
                 }
             });
         }
     }; 
 
     var progressBar = function() {        
         $('.progress-bar').on('on-appear', function() {
             $(this).each(function() {
                 var percent = $(this).data('percent');                
                 $(this).find('.progress-animate').animate({
                     "width": percent + '%'
                 }, $(this).find('.progress-animate').data('duration') );
 
                 $(this).parent('.flat-progress').find('.perc').addClass('show').animate({
                     "width": percent + '%'
                 }, $(this).find('.progress-animate').data('duration') );
             });
         });
     };
 
     var portfolioIsotope = function() {         
         if ( $().isotope ) {           
             var $container = $('.portfolio-wrap');

             $('.portfolio-filter li').on('click',function() {                           
                 var selector = $(this).find("a").attr('data-filter');
                 $('.portfolio-filter li').removeClass('active');
                 $(this).addClass('active');
                 $container.isotope({ filter: selector });
                 return false;
             });
 
             $('.flat-portfolio .load-more a').on('click', function(e) {
                 e.preventDefault();
 
                 var el = $(this),
                     url = el.attr('href'),
                     page = parseInt(el.attr('data-page'), 10);
 
                 el.addClass('loading').text('Loading...');
 
                 $.ajax({
                     type: "GET",
                     url: url,
                     dataType: "html",
                     async: false,   // wait result
                     data : { page : page }
                 })
                 .done(function (data) {
                     if ( data != null ) {                      
                         var newitem = $(data);
                         $container.append(newitem).isotope('appended', newitem);
                         el.removeClass('loading').text('Load more');
                         page = page + 1;
                         el.attr({'data-page': page, 'href': './ajax/p' + page + '.html'});
                     }
                 })
                 .fail(function () {
                     el.text('No more portfolio to load.');
                 })
             });
         };
     };
 
     var flatAccordion = function() {
         var args = {duration: 600};
         $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();
 
         $('.flat-toggle.enable .toggle-title').on('click', function() {
             $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
             $(this).toggleClass('active');
         }); // toggle 
 
         $('.flat-accordion .toggle-title').on('click', function () {
             if( !$(this).is('.active') ) {
                 $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                 $(this).toggleClass('active');
                 $(this).next().slideToggle(args);
             } else {
                 $(this).toggleClass('active');
                 $(this).next().slideToggle(args);
             }     
         }); // accordion
     };
 
     var goTop = function() {
         $(window).scroll(function() {
             if ( $(this).scrollTop() > 800 ) {
                 $('.go-top').addClass('show');
             } else {
                 $('.go-top').removeClass('show');
             }
         }); 
 
         $('.go-top').on('click', function() {            
             $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
             return false;
         });
     }; 
     
    
 
     var retinaLogos = function() {
       var retina = window.devicePixelRatio > 1 ? true : false;
         if(retina) {
             $('.logo').find('img').attr( {src:'./assets/image/LogoDark.png'} );
             $('.logo-bottom').find('img').attr( {src:'./assets/image/Logolight@2x.png'} );
             $('.logo-h2').find('img').attr( {src:'./assets/image/LogoDark@2x.png'} );
         }
     };       
 
     var searchIcon = function () {
         $(document).on('click', function(e) {   
             var clickID = e.target.id;   
             if ( ( clickID !== 'input-search' ) ) {
                 $('.header-search-form').removeClass('show');                
             } 
         });
 
         $('.header-search-icon').on('click', function(event){
             event.stopPropagation();
         });
 
         $('.header-search-form').on('click', function(event){
             event.stopPropagation();
         });        
 
         $('.header-search-icon').on('click', function (event) {
             if(!$('.header-search-form').hasClass( "show" )) {
                 $('.header-search-form').addClass('show');  
                 event.preventDefault();                
             }
                 
             else
                 $('.header-search-form').removeClass('show');
                 event.preventDefault();
 
         });        
   
     };
 
     var flatSpacer = function() {
         $(window).on('load resize', function(){
             var mode = 'desktop';
             if(matchMedia('only screen and (max-width: 991px)').matches) 
                 mode = 'mobile';
             if(matchMedia('only screen and (max-width: 767px)').matches)
                 mode = 'smobile';
             $('.themesflat-spacer').each( function(){
                 if( mode === 'desktop'){
                     $(this).attr('style','height:' + $(this).data('desktop') + 'px')
                 }else if( mode === 'mobile') {
                     $(this).attr('style','height:' + $(this).data('mobile') + 'px')
                 }else {
                     $(this).attr('style','height:' + $(this).data('smobile') + 'px')
                 }
             });
         });
     };
 
 
     var flatTabs = function(){
         $('.tab-nav').each(function(){
             $(this).find('.tab-content').children().hide();
             $(this).find('.tab-content').children().first().show();
             $(this).find('.list-tab-link').children('li').on('click',function(){
                 var liActive = $(this).index();
                 var contentActive=$(this).siblings().removeClass('active').parents('.tab-nav').find('.tab-content').children().eq(liActive);
                 contentActive.addClass('active').fadeIn("slow");
                 contentActive.siblings().removeClass('active');
                 $(this).addClass('active').parents('.tab-nav').find('.tab-content').children().eq(liActive).siblings().hide();
             });
         });
     };
     
     var flatIsotopeCase = function() {
         $(".box-gallery").each(function () {
             if ( $().isotope ) {           
                 var $container = $('.isotope-gl');
                 $('.flat-filter-isotope li').on('click',function() {                           
                     var selector = $(this).find("a").attr('data-filter');
                     $('.flat-filter-isotope li').removeClass('active');
                     $(this).addClass('active');
                     $container.isotope({ filter: selector });
                     return false;
                 });
             };
         });         
     };
 
     var flatAccordions = function() {
         var args = {easing:'easeOutExpo', duration:500};
         $('.item-faq.active').find('.content-item-faq').show();
         $('.title-heading-faq').on('click', function () {
             if ( !$(this).parent().is('.active') ) {
                 $(this).parent().toggleClass('active')
                     .children('.content-item-faq').slideToggle(args)
                 .parent().siblings('.active').removeClass('active')
                     .children('.content-item-faq').slideToggle(args);
             } else {
                 $(this).parent().toggleClass('active');
                 $(this).next().slideToggle(args);
             }
         });
     };
 
     var removePreloader = function() {        
         $(window).on("load", function () {
             $(".loader").fadeOut();
             $("#loading-overlay").delay(500).fadeOut('slow',function(){
                 $(this).remove();
             }); 
         });
     }; 
 
        // Dom Ready
     $(function() { 
        if ( matchMedia( 'only screen and (min-width: 991px)' ).matches ) {          
            headerFixed();    
        }
        headerFixed();      
         responsiveMenu();
         ClientCarousel();
         iconboxCarousel();
         Testimonials();
         parallax();
         flatCounter(); 
         progressBar();
         portfolioIsotope();
         flatAccordion();
         goTop();
         retinaLogos();       
         removePreloader();
         searchIcon();
         flatSpacer();
         flatTabs();
         flatIsotopeCase();
         flatAccordions();
        });
 
 })(jQuery);
 
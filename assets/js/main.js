/* ==========================================================================

   Table of content:

   1. Custom mouse cursor
   2. Animsition preloader
   3. Swiper slider
   4. Isotope
   5. Scroll animations
   6. Navigation open/close
   7. Drop-down menu
   8. Change menu background
   9. Magnific popup
   10. Touch, no touch
   11. Contact form
   12. Marquee
   13. Splitting
   14. SplitLines

   ========================================================================== */





$(function() {
	"use strict";

	/* 1. Custom mouse cursor */
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px"
	});
	var
		e = document.getElementById("js-pointer");

	$(document).mousemove(function(e) {

		$(".js-pointer-large, .swiper-button-next, .swiper-button-prev, .mfp-arrow-left, .mfp-arrow-right")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-large")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-large")
		})

		$(".js-pointer-small, .swiper-pagination-bullet")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-small")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-small")
		})

		$(".js-pointer-drag")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-drag")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-drag")
		})

		$(".js-pointer-zoom")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-zoom")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-zoom")
		})

		$(".js-pointer-none")
		.on("mouseenter", function() {
			$('.js-pointer').addClass("js-none")
		})
		.on("mouseleave", function() {
			$('.js-pointer').removeClass("js-none")
		})

	});

	$(document).ready(function() {

		/* 2. Animsition preloader */
		$(".js-animsition-overlay").animsition({
			inClass: 'overlay-slide-in-right',
			outClass: 'overlay-slide-out-right',
			inDuration: 1,
			outDuration: 1500,
			linkElement: '.js-animsition-link',
			// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
			loading: false,
			loadingParentElement: 'body', //animsition wrapper element
			loadingClass: 'animsition-loading',
			loadingInner: '', // e.g '<img src="loading.svg" />'
			timeout: false,
			timeoutCountdown: 5000,
			onLoadEvent: true,
			browser: [ 'animation-duration', '-webkit-animation-duration'],
			// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
			// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
			overlay : true,
			overlayClass : 'js-animsition-overlay-slide',
			overlayParentElement : 'body',
			transition: function(url){ window.location.href = url; }
		});

		$('body').on('animsition.outStart', function() {
			$('body').removeClass('js-page-in-out');
			$('body').addClass('js-page-out');
		})

		$('body').on('animsition.inEnd', function() {
			$('body').addClass('js-page-in-out');
			$('body').addClass('js-page-in');
			setTimeout(function () {
				$("body").addClass("js-page-in-anim-active");
			}, 1000);

			/* 3. Swiper slider */
			var interleaveOffset = 0.5;

			var homeSwiper = new Swiper ('.js-home-slider', {
				speed: 1300,
				watchSlidesProgress: true,
				simulateTouch: false,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.width * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transform =
							"translate3d(" + innerTranslate + "px, 0, 0)";
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transition =
							speed + "ms";
						}
					}
				}
			});

			var fullscreenSwiper = new Swiper ('.js-fullscreen-slider', {
				speed: 1300,
				watchSlidesProgress: true,
				simulateTouch: false,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.width * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transform =
							"translate3d(" + innerTranslate + "px, 0, 0)";
						}
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".js-parallax-slide-bg").style.transition =
							speed + "ms";
						}
					}
				},
				mousewheel: {
					sensitivity: 1
				}
			});

			var carouselSwiperBg = new Swiper(".js-carousel-slider-bg", {
				speed: 1300,
				parallax: true
			});

			var carouselSwiper = new Swiper ('.js-carousel-slider', {
				speed: 1300,
				simulateTouch: false,
				mousewheel: {
					sensitivity: 1
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				thumbs: {
					swiper: carouselSwiperBg
				}
			});

			var view2Swiper = new Swiper ('.js-2-view-slider', {
				slidesPerView: 1,
				centeredSlides: true,
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				},
				breakpoints: {
					1000: {
						slidesPerView: 2
					}
				}
			});

			var view1Swiper = new Swiper ('.js-1-view-slider', {
				speed: 1400,
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					dynamicBullets: true
				}
			});

			var infiniteSwiper = new Swiper ('.js-infinite-slider', {
				slidesPerView: 2,
				spaceBetween: 20,
				speed: 5000,
				loop: true,
				autoplay: {
					delay: 0
				},
				breakpoints: {
					400: {
						slidesPerView: 3
					},
					550: {
						slidesPerView: 4
					},
					768: {
						slidesPerView: 5
					},
					1000: {
						slidesPerView: 6
					}
				}
			});

			var skillsSwiper = new Swiper ('.js-skills-slider', {
				slidesPerView: 1.2,
				speed: 2000,
				spaceBetween: 40,
				freeMode: true,
				breakpoints: {
					550: {
						slidesPerView: 1.3
					},
					768: {
						slidesPerView: 1.2,
						spaceBetween: 80
					},
					1000: {
						slidesPerView: 1.4,
						spaceBetween: 80
					}
				}
			});

			var servicesSwiper = new Swiper ('.js-services-slider', {
				slidesPerView: 1.2,
				speed: 2000,
				spaceBetween: 40,
				freeMode: true,
				breakpoints: {
					550: {
						slidesPerView: 1.3
					},
					768: {
						slidesPerView: 1.5,
						spaceBetween: 80
					}
				}
			});

			var teamSwiper = new Swiper ('.js-team-slider', {
				slidesPerView: 1.3,
				speed: 2000,
				spaceBetween: 40,
				freeMode: true,
				breakpoints: {
					550: {
						slidesPerView: 1.5
					},
					768: {
						slidesPerView: 1.8,
						spaceBetween: 80
					}
				}
			});

			/* 4. Isotope */
			$('.js-isotope-grid-box').isotope({
				itemSelector: '.js-isotope-grid-item',
				percentPosition: true
			});

			/* 5. Scroll animations */
			var scroll = new LocomotiveScroll({
				el: document.querySelector('#js-scroll-content'),
				smooth: true
			});

		});

		/* 6. Navigation open/close */
		$( ".js-menu-open-close" ).on( "click", function() {
			$('body').toggleClass('js-nav-active');
		});

		$( ".js-landing-close" ).on( "click", function() {
			$('body').removeClass('js-nav-active');
		});

		/* 7. Drop-down menu */
		$('.js-dropdown-open').on("click",function() {
			$('.js-dropdown-active-box').addClass('js-dropdown-is-active');
			$(this).find('.js-dropdown').addClass('js-dropdown-is-active');
		});

		$('.js-dropdown-close').on("click",function() {
			$('.js-dropdown-active-box').removeClass('js-dropdown-is-active');
			$('.js-dropdown').removeClass('js-dropdown-is-active');
		});

		$('.js-dropdown-open-2lvl').on("click",function() {
			$('.js-dropdown-active-box').addClass('js-dropdown-is-active-2lvl');
			$(this).find('.js-dropdown-2lvl').addClass('js-dropdown-is-active-2lvl');
		});

		$('.js-dropdown-close-2lvl').on("click",function() {
			$('.js-dropdown-active-box').removeClass('js-dropdown-is-active-2lvl');
			$('.js-dropdown-2lvl').removeClass('js-dropdown-is-active-2lvl');
		});

	});

	/* 8. Change menu background */
	$(document).on('mouseover', '.js-nav-bg-change', function(){
		$(this).addClass('js-nav-bg-active').siblings().removeClass('js-nav-bg-active')
	});

	/* 9. Magnific popup */
	$('.js-photo-popup').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade', // this class is for CSS animation below
		gallery: {
			// options for gallery
			enabled: true
		},
		removalDelay: 1000,
		autoFocusLast: false,
		preloader: false
	});

	$('.js-popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 1000,
		autoFocusLast: false,
		preloader: false
	});

	/* 10. Touch, no touch */
	var supports = (function() {
		var d = document.documentElement,
			c = "ontouchstart" in window || navigator.msMaxTouchPoints;
		if (c) {
			d.className += " js-touch";
			return {
				touch: true
			}
		} else {
			d.className += " js-no-touch";
			return {
				touch: false
			}
		}
	})();

	/* 11. Contact form */
	$("#send_form").on('submit', function(){
		var first_name = $("#first_name").val().trim();
		var last_name = $("#last_name").val().trim();
		var email = $("#email").val().trim();
		var message = $("#message").val().trim();

		$.ajax({
			url: 'assets/ajax/mail.php',
			type: 'POST',
			cache: false,
			data: {'first_name': first_name, 'last_name': last_name, 'email': email, 'message': message},
			dataType: 'html',
			beforeSend: function() {
				$("#send").addClass("js-active");
			},
			success: function(data) {
				if(!data || data != "Good"){
					$("#m_err").addClass("js-active");
					$(".form-box").addClass("js-active");
					setTimeout(function () {
						$("#send").removeClass("js-active");
					}, 2000);
				}

				else {
					$("#m_sent").addClass("js-active");
					$(".form-box").addClass("js-active");
					setTimeout(function () {
						$("#send").removeClass("js-active");
						$("#send_form").trigger("reset");
						$('.email-label').removeClass("js-active");
					}, 2000);
				}
				$('.js-popup-close').click(function() {
					$(this).parents('.js-popup-fade').removeClass("js-active");
					$('.form-box').removeClass("js-active");
					return false;
				});

				$(document).keydown(function(e) {
					if (e.keyCode === 27) {
						e.stopPropagation();
						$('.js-popup-fade').removeClass("js-active");
						$('.form-box').removeClass("js-active");
					}
				});

				$('.js-popup-fade').click(function(e) {
						if ($(e.target).closest('.js-popup').length == 0) {
						$('.js-popup-fade').removeClass("js-active");
						$('.form-box').removeClass("js-active");
					}
				});
			},
		})
		return false;
	});

	$('#email').on('keyup',function(){
		var $this = $(this),
			val = $this.val();

		if(val.length >= 1){
			$('.email-label').addClass("js-active");
		}
		else {
			$('.email-label').removeClass("js-active");
		}
	});

	/* 12. Marquee */
	$('.marquee').marquee({
		//duration in milliseconds of the marquee
		duration: 15000,
		//gap in pixels between the tickers
		gap: 50,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true
	});

	/* 13. Splitting */
	Splitting();

	/* 14. SplitLines */
	$('.anim-split-lines').each(function () {

		$(this).splitLines({
			tag: '<div class="animated-line-wrapper"><div class="animated-line-content">',
			keepHtml: true
		});
		
	});

});
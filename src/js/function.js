var device;

// *smooth scroll
$(function () {
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		// スマートフォン用コード
		device = 'mobile';
	} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		// タブレット用コード
		device = 'tablet';
	} else {
		// PC用コード
		device = 'pc';
	}

	console.log(device);

	$('a[href^="#"]').click(function () {
		var speed = 800;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({
			scrollTop: position
		}, speed, "swing");
		return false;
	});
});

// TOPページのヘッダー
$(window).scroll(function() {
	console.log(device);
	if (device == 'pc' ) {
		if($(this).scrollTop() > 500) {
			$("#tp-header").addClass("sticky");
			$("#tp-menu li a").addClass("sticky");
			$(".header-logo a").addClass("sticky");
			$(".under-link a").addClass("sticky");
		} else {
			$("#tp-header").removeClass("sticky");
			$("#tp-menu li a").removeClass("sticky");
			$(".header-logo a").removeClass("sticky");
			$(".under-link a").removeClass("sticky");
		}
	}
	if (device == 'mobile' ) {
		if($(this).scrollTop() > 500) {
			$(".btn-menu").addClass("sticky");
			$(".btn-menu span").addClass("sticky");
		} else {
			$(".btn-menu").removeClass("sticky");
			$(".btn-menu span").removeClass("sticky");
		}
	}
});

// *fadeIn-animation
$(function () {
	var scrollAnimationElm = document.querySelectorAll('.sa');
	var scrollAnimationFunc = function () {
		for (var i = 0; i < scrollAnimationElm.length; i++) {
			var triggerMargin = 200;
			var elm = scrollAnimationElm[i];
			var showPos = 0;
			if (elm.dataset.sa_margin != null) {
				triggerMargin = parseInt(elm.dataset.sa_margin);
			}
			if (elm.dataset.sa_trigger) {
				showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;
			} else {
				showPos = elm.getBoundingClientRect().top + triggerMargin;
			}
			if (window.innerHeight > showPos) {
				elm.classList.add('show');
			}
		}
	}

	$(window).on('load resize', function() {
		var w = $(window).width();
		var x = 768;
		if(w > x) {
			window.addEventListener('load', scrollAnimationFunc);
			window.addEventListener('scroll', scrollAnimationFunc);
			scrollAnimationElm.classList.add('show');
		} else {
			$('.sa').addClass('show');
		}
	})
});

// *main-visual-slider
$(function () {
	var page=0;
	var lastPage = parseInt($("#mv-slider img").length-1);
		$("#mv-slider img").css("display","none");
		$("#mv-slider img").eq(page).css("display","block");
	function changePage(){
		$("#mv-slider img").fadeOut(1000);
		$("#mv-slider img").eq(page).fadeIn(1000);
	};
	var Timer;
	function startTimer(){
	Timer =setInterval(function(){
				if(page === lastPage){
							page = 0;
							changePage();
					}else{
							page ++;
							changePage();
				};
			},5000);
	}
	function stopTimer(){
	clearInterval(Timer);
	}
	startTimer();
});

// TOPページのエントリー・お問い合わせbtn
$(window).scroll(function() {
	if($(this).scrollTop() > 500) {
		$("#entry-btn").css("opacity","1");
	} else {
		$("#entry-btn").css("opacity","0");
	}
	if($(this).scrollTop() > 500) {
		$("#contact-btn").css("opacity","1");
	} else {
		$("#contact-btn").css("opacity","0");
	}
});

// *humberger-menu
$(function () {
	$('.btn-menu').on('click', function () {
		$('#tp-menu, #menu').toggleClass('open');
		$('.btn-menu').toggleClass('open');
		$('.btn-menu span').toggleClass('open');
	});
});

// *slick-slider
$(function(){
	$('#message-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '200px',
		focusOnSelect: true,
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					dots: false,
				}
			},
		],
	});
	$('#rookie-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		// centerMode: true,
		focusOnSelect: true,
		arrows: true,
		dots: true,
		dotsClass: 'slide-dots'
	});
	$('#veteran-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		// centerMode: true,
		focusOnSelect: true,
		arrows: true,
		dots: true,
		dotsClass: 'slide-dots'
	});
});

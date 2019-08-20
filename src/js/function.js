// *smooth scroll
$(function () {
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
	window.addEventListener('load', scrollAnimationFunc);
	window.addEventListener('scroll', scrollAnimationFunc);
});

// *main-visual-slider
$(function () {
	var page=0;
	var lastPage =parseInt($("#mv-slider img").length-1);
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

// $(window).scroll(function() {
// 	if($(this).scrollTop() > 500) {
// 		$(".header").css("background","rgba(255,255,255, .5)");
// 		$(".header").css("box-shadow","0px 2px 5px 2px rgba(140, 140, 140, 0.4)");
// 	} else {
// 		$(".header").css("background","none");
// 		$(".header").css("box-shadow","none");
// 	}
// 	if($(this).scrollTop() > 500) {
// 		$("#menu li a").css("margin-left","50px");
// 		$("#menu li a").css("font-size","1.3rem");
// 		$("#menu li a").css("font-weight","bold");
// 		$("#menu li a").css("color","#000");
// 	} else {
// 		$("#menu li a").css("margin-left","40px");
// 		$("#menu li a").css("font-size","1.4rem");
// 		$("#menu li a").css("font-weight","normal");
// 		$("#menu li a").css("color","#fff");
// 	}
// 	if($(this).scrollTop() > 500) {
// 		$(".header-logo a").css("width","150px");
// 	} else {
// 		$(".header-logo a").css("width","175px");
// 	}
// });

// *humberger-menu
$(function () {
	$('.btn-menu').on('click', function () {
		$('#menu').toggleClass('open');
		$('.btn-menu').toggleClass('open');
		$('.btn-menu span').toggleClass('open');
	});
});

// *slick-slider
$(function(){
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '200px',
		focusOnSelect: true,
		arrows: true,
		dots:true,
		// レスポンシブ
		// responsive: [{
		// 	breakpoint: 1000,
		// 		 settings: {
		// 			slidesToShow: 3,
		// 			centerPadding: '50px',
		// 	}
		// },{
		// 	breakpoint: 768,
		// 		 settings: {
		// 			slidesToShow: 1,
		// 		}
		// 	}
		// ]
	});
});

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

$(window).scroll(function() {
	if($(this).scrollTop() > 500) {
		$(".header").css("background","rgba(255,255,255, .5)");
		$(".header").css("box-shadow","0px 2px 5px 2px rgba(140, 140, 140, 0.4)");
	} else {
		$(".header").css("background","none");
		$(".header").css("box-shadow","none");
	}
	if($(this).scrollTop() > 500) {
		$("#menu li a").css("margin-left","50px");
		$("#menu li a").css("font-size","1.3rem");
		$("#menu li a").css("font-weight","bold");
		$("#menu li a").css("color","#000");
	} else {
		$("#menu li a").css("margin-left","40px");
		$("#menu li a").css("font-size","1.4rem");
		$("#menu li a").css("font-weight","normal");
		$("#menu li a").css("color","#fff");
	}
	if($(this).scrollTop() > 500) {
		$(".header-logo a").css("width","150px");
	} else {
		$(".header-logo a").css("width","175px");
	}
});
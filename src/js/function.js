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
$(function(){$('a[href^="#"]').click(function(){var t=$(this).attr("href"),n=$("#"==t||""==t?"html":t).offset().top;return $("html, body").animate({scrollTop:n},800,"swing"),!1})}),$(function(){function t(){for(var t=0;t<o.length;t++){var n=200,e=o[t],s=0;null!=e.dataset.sa_margin&&(n=parseInt(e.dataset.sa_margin)),s=e.dataset.sa_trigger?document.querySelector(e.dataset.sa_trigger).getBoundingClientRect().top+n:e.getBoundingClientRect().top+n,window.innerHeight>s&&e.classList.add("show")}}var o=document.querySelectorAll(".sa");window.addEventListener("load",t),window.addEventListener("scroll",t)}),$(function(){var t=0,n=parseInt($("#mv-slider img").length-1);function e(){$("#mv-slider img").fadeOut(1e3),$("#mv-slider img").eq(t).fadeIn(1e3)}$("#mv-slider img").css("display","none"),$("#mv-slider img").eq(t).css("display","block"),setInterval(function(){t===n?t=0:t++,e()},5e3)}),$(window).scroll(function(){500<$(this).scrollTop()?$("#entry-btn").css("opacity","1"):$("#entry-btn").css("opacity","0"),500<$(this).scrollTop()?$("#contact-btn").css("opacity","1"):$("#contact-btn").css("opacity","0")}),$(function(){$(".btn-menu").on("click",function(){$("#tp-menu, #menu").toggleClass("open"),$(".btn-menu").toggleClass("open"),$(".btn-menu span").toggleClass("open")})}),$(function(){$(".slider").slick({autoplay:!0,autoplaySpeed:3e3,slidesToShow:3,centerMode:!0,centerPadding:"200px",focusOnSelect:!0,arrows:!0,dots:!0})});
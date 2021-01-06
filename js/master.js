/* global $, alert, console */

$(function ($) {

	'use strict';
	
	// Adjusting header position top 
	$(".landing-page header").css("top", 25);
	
	
	// remove Preloader after page load
	$("#preloader").css("display", "none");
	
	// make body overflow auto
	$("body").css("overflow", "auto");
	
	
	// on scroll effects 
	$(window).on("scroll", function() {
	
		// make navbar fixed top when scroll 
		($(this).scrollTop() > 50) ? $(".landing-page header").css("top", 0): $(".landing-page header").css("top", 25);
		
		// progress skill percentage when scroll reached to skills section
		if($(this).scrollTop() > $(".resume").offset().top) {
		
			var skills = $(".resume .skill .progress .progress-bar");
			
			for(var i=0; i<skills.length; i++) {
			
				$(".resume .skill .progress .progress-bar").eq([i]).css({
				
					'width': $(".resume .skill .progress .progress-bar").eq([i]).attr("data-progress")
				
				});
			
			}
		
		 }
		
		 // appear back to top button when scroll greater than 800
		 ($(this).scrollTop() > 800) ? $(".back-top").css("bottom", "15px" ) : $(".back-top").css("bottom", "-200px");
	
	});
	
	
	$(".navbar-nav .nav-item").on("click", function() {
		// navbar item on click add class active on 'a' child and remove it from siblings children
		$(this).children().addClass("active").parent().siblings().children().removeClass("active");
		
		// smooth scroll to sections when click on navbar links
		$("html, body").animate({
		
			scrollTop: $($(this).children().attr("href")).offset().top - 82
		
		}, 800);
	
	});
	
		
	// init typed plugin
	var typed = new Typed('#typed', {
		stringsElement: '#typed-strings',
		typeSpeed: 90,
		backSpeed: 15,
		backDelay: 1000,
		loop: true
	});
	
	
	// init Isotope 
	var $grid =$('.work').isotope({
	
		// options
		itemSelector: '.work-item',
		
		layoutMode: 'masonry'
		
	});
	
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	
		var filterValue = $(this).attr('data-filter');
		
		$grid.isotope({ filter: filterValue });
		
		// this button take class active and remove it from siblings buttons
		$(this).addClass("active").siblings().removeClass("active");
		
	});
	
	
	// remove placeholder on input focus
	$(".field").on("focus", function() {
	
		$(this).attr("placeholder", "");
	
	});
	
	// return placeholder on input blur
	$(".field").on("blur", function() {
	
		$(this).attr("placeholder", $(this).attr('data-hold'));
		
		$(".password-toggle").css("color", "#aaa");
	
	});
	
	// show and hide password
	$(".password-toggle").on("click", function() {
	
		$(".password").attr("type", $(this).attr('data-type')).focus();
		
		$(this).removeClass("eye-show").siblings().addClass("eye-show").css('color', '#eee');
	
	});
	
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:10000,
		autoplayHoverPause:true, 
		responsive:{
		
			0: { items: 1 }
		}
	});
	
	
	// init Back to top button
	$(".back-top").on("click", function() {
	
		$("html, body").animate({
		
			scrollTop: 0
		
		}, 800);
	
	});
	
	
	// init wow plugin
	new WOW().init();

});
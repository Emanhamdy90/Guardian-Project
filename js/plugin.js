/*global $,document,console,jQuery*/

$(document).ready(function () {
	"use strict";
	
	$('.pio-content').hover(function () {
		
		$(this).addClass('shadow').siblings().removeClass('shadow');
		$(this).css('transition', 'all .5s ease-in-out');
		
	});
	
	$(".sign-up .btns button").hover(function () {
		$(this).css(
			{
				'backgroundColor': '#1dd8a9',
				'border': 'none'
			}
		).siblings().css(
			{
				'backgroundColor': 'transparent',
				'border': '1px solid #FFF'
			}
		);
		
	});
		
		//Carousel 
		
	$('.carousel').carousel({
		interval: 5000
	});
	
	$('.testimonials .prev-next .carousel-control-prev, .testimonials .prev-next .carousel-control-next').on('click', function () {
		
		$(this).css(
			
			{
				backgroundColor: '#2f94f0',
				color: '#FFF'
			}
			
		).siblings().css(
			{
				'backgroundColor': '#FFF',
				'color': '#2f94f0'
			}
		);
	});
	
	$('.carousel-item .active').on('click', function () {
		$(this).addClass('shadow');
	});

});
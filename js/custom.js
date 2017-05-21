/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";

	
		//add some elements with animate effect
		$(".about-1").hover(
			function () {
			$(this).find('.icon').addClass("animated fadeInDown");
			$(this).find('p').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('.icon').removeClass("animated fadeInDown");
			$(this).find('p').removeClass("animated fadeInUp");
			}
		);				
});
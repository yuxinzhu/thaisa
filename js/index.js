$(document).ready(function() {
	var slider = $('.flexslider').flexslider({
		controlNav: false,
		directionNav: false,
		animation: "fade",
		animationSpeed: 1000,
		before: function() {
			$(".banner").toggle(200);
		}
	});
});

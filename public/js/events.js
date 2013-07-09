$(document).ready(function() {
	//CODE BELOW NEEDS MASSIVE REFACTORING
	$(".event-text-container").hide();
	$(".event").hover( function() {
		// $(this).children(".event-title").hide();

		$(this).children(".event-title").stop().animate({
			"top": "0px", "margin-top": "15px", "height": "185px",
			"opacity": "0.65", "background-color": "#eeeeee", "color": "black"
		}, 200);
		// $(this).children(".event-title").css("height", "200px");
		// $(this).children(".event-text-container").show("slide", {direction: "down"});
	}, function() {
		$(this).children(".event-title").stop().animate({"margin-top": "175px", "height": "25px", "opacity": "0.85", "background-color": "#454545", "color": "white"}, 300);
		// $(this).children(".event-text-container").hide("slide", {direction: "down"});
	});
});

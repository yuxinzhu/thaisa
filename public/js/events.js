$(document).ready(function() {
	$(".event-subtitle").css("height", "0").hide();
	$(".event-text-container").css("margin-top", "175px").height(25);
	$(".event").mouseenter( function() {
		$(this).find(".event-subtitle").stop().animate({
			"height": "150px"
		}, 200).show();

		$(this).find(".event-text-container").stop().animate({
			"height": "175px",
			"margin-top": "25px"
		})
		$(this).find(".title-arrow").removeClass("icon-caret-up").addClass("icon-caret-down");
	});
	$(".event").mouseleave( function() { //hide function
		var $eventSubtitle = $(this).find(".event-subtitle");
		$eventSubtitle.stop().animate({
			"height": "0px"
		}, 200, function() {
			$eventSubtitle.hide();
		});

		$(this).find(".event-text-container").stop().animate({
			"height": "25px",
			"margin-top": "175px"
		})
		$(this).find(".title-arrow").addClass("icon-caret-up").removeClass("icon-caret-down");
	});
});

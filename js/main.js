$(function() {
	/* "Tell me more" scroll */
	$("#one").click(function() {
		$('html, body').animate({
        	scrollTop: $("#slide-2").offset().top
		}, 2000);
	});

	/* Dynamically set lower content min-height and paddings */
	var bodyHeight = $("body").height();
	$("#lower-content").css("min-height", bodyHeight);
	// var infoBlocks = $(".info-block");
	// infoBlocks.height(bodyHeight / 5);
	// infoBlocks.css("margin", 0);
	// $("#lower-content").css("padding-top", bodyHeight / 10);
	// $("#lower-content").css("padding-bottom", bodyHeight / 10);
});
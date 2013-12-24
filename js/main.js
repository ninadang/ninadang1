$(function() {

	var viewportheight = $(window).height();

	$('#slide1, #slide2, #slide3, #slide4, #slide5').height(viewportheight);

	$("#narr-pics").hide();
	$("#card-pics").hide();
	$("#quiet-pics").hide();
	
	$(".work-narr").click(function(){
			$("#card-pics").hide();
			$("#quiet-pics").hide();
			$("#narr-pics").toggle("slow");
	});

	$(".work-card").click(function(){
		$("#narr-pics").hide();
		$("#quiet-pics").hide();
		$("#card-pics").toggle("slow");
	});


	$(".work-quiet").click(function(){
		$("#narr-pics").hide();
		$("#card-pics").hide();
		$("#quiet-pics").toggle("slow");
	});

	// img tag clicker
	$(".pic").click(function() {
		window.open($(this).attr("src"));
	});

	$(".weblink").click(function() {
		window.open($(this).attr("src"));
	});
});
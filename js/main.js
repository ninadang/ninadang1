$(function() {

	var viewportheight = $(window).height();

	$('#slide1, #slide2, #slide3, #slide4, #slide5').height(viewportheight);

	$("#narr-pics").hide();
	$("#info-pics").hide();
	$("#quiet-pics").hide();
	
	$(".work-narr").click(function(){
			$("#card-pics").hide();
			$("#quiet-pics").hide();
			$("#info-pics").hide();
			$("#narr-pics").toggle("slow");
	});

	$(".work-card").click(function(){
		$("#narr-pics").hide();
		$("#quiet-pics").hide();
		$("#info-pics").hide();
		$("#card-pics").toggle("slow");
	});


	$(".work-quiet").click(function(){
		$("#narr-pics").hide();
		$("#card-pics").hide();
		$("#info-pics").hide();
		$("#quiet-pics").toggle("slow");
	});

	$(".work-info").click(function(){
		$("#narr-pics").hide();
		$("#card-pics").hide();
		$("#quiet-pics").hide();
		$("#info-pics").toggle("slow");
	});

	// img tag clicker
	$(".pic").click(function() {
		window.open($(this).attr("src"));
	});

	$(".weblink").click(function() {
		window.open($(this).attr("src"));
	});
});
$(function() {

	var viewportheight = $(window).height();

	$('#slide1, #slide2, #slide3, #slide4, #slide5').height(viewportheight);

	$("#narr-pics").hide();
	$("#card-pics").hide();

	//toggle the componenet with class msg_body
	$(".work-narr").click(function(){
		$("#card-pics").hide();
		$("#narr-pics").show("slow");
	});

	$(".work-card").click(function(){
		$("#narr-pics").hide();
		$("#card-pics").show("slow");
	});
});
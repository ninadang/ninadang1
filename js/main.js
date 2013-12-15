$(function() {

	var viewportheight = $(window).height();
	/* HIIIIIII -Elliot */
	$('#slide1, #slide2, #slide3, #slide4, #slide5').height(viewportheight);
	
	//hide the all of the element with class msg_body
	$(".msg-body").hide();
	
	//toggle the componenet with class msg_body
	$(".msg-head").click(function(){
		//for each .msg-body
		//if .attr('display') == "none" then
			//hide me
		//
		var target = $(this).next(".msg-body");
		target.slideToggle(600);
		target.addClass('active');
		
	});
});
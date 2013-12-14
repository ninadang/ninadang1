$(function() {
	
	//hide the all of the element with class msg_body
	$(".msg-body").hide();
	
	//toggle the componenet with class msg_body
	$(".msg-head").click(function(){
		$(this).next(".msg-body").slideToggle(600);
	});
});
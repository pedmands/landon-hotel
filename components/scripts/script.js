$(function() {
	var wheight = $(window).height(); //get the window height

	$('.fullheight').css('height', wheight);

	$(window).resize(function(){
		var wheight = $(window).height(); //get the window height
		$('.fullheight').css('height', wheight);
	});
});


/*===================================================================================*/
/*	ANIMATIONS ON SCROLL
/*===================================================================================*/

$(document).ready(function() {
	var waypointClass = 'main [class*="col-"]';
	var animationClass = 'fadeInUp';
	var delayTime;
	$(waypointClass).css({opacity: '0'});
	
	$(waypointClass).waypoint(function() {
		delayTime += 100;
		$(this).delay(delayTime).queue(function(next){
			$(this).toggleClass('animated');
			$(this).toggleClass(animationClass);
			delayTime = 0;
			next();
		});
		$(this).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
			$(this).css({opacity: '1'});
			$(this).toggleClass(animationClass);
		});
	},
	{
		offset: '90%',
		triggerOnce: true
	});

	$('.navbar-nav li a').on('click', function(event){
		event.preventDefault();
		var whereTo = $(this).attr('href');
		$('html, body').animate({
        scrollTop: $(whereTo).offset().top
    }, 1000);
	});

});
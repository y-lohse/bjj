$(function(){
	var prevScroll = 0;
	$(window).on('scroll', function(){
		var scrollTop = $(this).scrollTop();
		
		if (scrollTop < prevScroll){
			$('.main-nav').css('opacity', 1);
		}
		else{
			var alpha = Math.min(Math.max(1-scrollTop/600, 0), 1);
			$('.main-nav').css('opacity', alpha);
		}
		
		prevScroll = scrollTop;
	});
});
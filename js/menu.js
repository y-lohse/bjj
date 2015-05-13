$(function(){
	var prevScroll = 0;
	$(window).on('scroll', function(){
		var scrollTop = $(this).scrollTop(),
			height = $(this).height(),
			toptreshold = 600,
			bottomTreshold = 50;
		
		if (scrollTop < prevScroll){
			$('.main-nav').css('opacity', 1);
		}
		else{
			var alpha = 1 - (document.body.scrollHeight - (this.pageYOffset + this.innerHeight))/bottomTreshold;
			if (alpha <= 0) alpha = 1-scrollTop/toptreshold;
			
			alpha = Math.min(Math.max(alpha, 0), 1);
			$('.main-nav').css('opacity', alpha);
		}
		
		prevScroll = scrollTop;
	});
	
	$('section.content').fitVids();
});
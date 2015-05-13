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
	
	var searchResultTemplate = '';
	searchResultTemplate += '<li class="post-header">';
	searchResultTemplate += '<h1 class="post-title"><a href="{url}">{title}</a></h1>';
	
	searchResultTemplate += '<div class="post-meta"><svg class="icon"><use xlink:href="#clock"></use></svg>';
	searchResultTemplate += '{time} minute read</div>';
	
	searchResultTemplate += '<div class="post-meta"><svg class="icon"><use xlink:href="#calendar"></use></svg>';
	searchResultTemplate += '{fdate}</div>';
	searchResultTemplate += '</li>';
	
	SimpleJekyllSearch.init({
		searchInput: document.getElementById('search'),
		resultsContainer: document.getElementById('search-results'),
		dataSource: '/bjj/search.json',
		noResultsText: 'nothing found',
		searchResultTemplate: searchResultTemplate
	});
	
	$('#search').on('keyup', function(){
		if ($('#search-results').children().length) $('.content').hide();
		else $('.content').show();
	});
	
	$('section.content').fitVids();
});
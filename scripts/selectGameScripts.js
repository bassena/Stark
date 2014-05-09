$(document).ready(function(){
	$('#roulette').hover(function(){
		$(this).animate({
			backgroundColor: 'rgba(255,255,255,0.5)'
		}, 200);
	}, function(){
		$(this).animate({
			backgroundColor: 'rgba(0,0,0,0.5)'
		},200);
	});
	
	$('#blkjk').hover(function(){
		$(this).animate({
			backgroundColor: 'rgba(255,255,255,0.5)'
		},200);
	}, function(){
		$(this).animate({
			backgroundColor: 'rgba(0,0,0,0.5)'
		},200);
	});
	
	$('#poker').hover(function(){
		$(this).animate({
			backgroundColor: 'rgba(255,255,255,0.5)'
		},200);
	}, function(){
		$(this).animate({
			backgroundColor: 'rgba(0,0,0,0.5)'
		},200);
	});
	
	$('#slots').hover(function(){
		$(this).animate({
			backgroundColor: 'rgba(255,255,255,0.5)'
		},200);
	}, function(){
		$(this).animate({
			backgroundColor: 'rgba(0,0,0,0.5)'
		},200);
	});
});
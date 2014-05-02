$(document).ready(function(){
	$('#gameSelector').accordion({
		collapsible:true,
		active: false,
		animated:'bounceslide',
		heightStyle: 'content'
	});
	$('#gameSelector > h3').addClass('ui-corner-bottom');
	$('#games').menu();
});
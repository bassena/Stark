$(document).ready(function(){
	$('#gameSelector').accordion({
		collapsible:true,
		heightStyle: 'content',
		active: false
	});
	$('#games').menu();
	$('#gameSelector > h3').addClass('ui-corner-bottom');
});
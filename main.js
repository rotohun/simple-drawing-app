jQuery(document).ready(function($) {
//Store colors

var color = $('.selected').css('background-color');
var context = $('canvas')[0].getContext('2d');
var $canvas = $('canvas');
var lastEvent;
var mouseDown = false;


	//When clicking on control list items
	$('.controls').on('click',"li",function() {
		//Deselect sibling elements
		$(this).siblings().removeClass('selected');
		//select clicked element
		$(this).addClass('selected');
		//Cache current element
		color = $(this).css('background-color');
	});


	//When add color is pressed
	$('#revealColorSelect').click(function() {
		changeColor();
		//Show color select or hide the color select
		$('#colorSelect').toggle()
	});




	//update the new color 		
	function changeColor(argument) {
		var r = $('#red').val();
		var g = $('#green').val();
		var b = $('#blue').val();

		$('#newColor').css('background-color', 'rgb('+ r +','+ g +','+ b +')');
	}

	//When color sliders change
	$('input[type="range"]').change(changeColor);


	//when add color is pressed
	$('#addNewColor').click(function() {
		//append the color to the controls 
		var $newColor = $('<li></li>');
		$newColor.css('background-color', $('#newColor').css('background-color'));
		$('.controls ul').append($newColor)
		//Select the new color
		$newColor.click();
	});
		
		

	// On mouse events on the canvas
	$canvas.mousedown(function(e) {

		lastEvent = e;
		mouseDown = true;
		
	}).mousemove(function(e) {
		// Draw lines
		if (mouseDown) {
			context.beginPath();
			context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle = color;
			context.stroke();
			lastEvent = e;

		}

	}).mouseup(function() {
		mouseDown = false;
	}).mouseleave(function() {
		$canvas.mouseup();
	});



});
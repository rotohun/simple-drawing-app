jQuery(document).ready(function($) {
//Store colors

var color = $('.selected').css('background-color');



	//When clicking on control list items
	$('.controls li').click(function() {
		//Deselect sibling elements
		$(this).siblings().removeClass('selected');
		//select clicked element
		$(this).addClass('selected');
		//Cache current element
		color = $(this).css('background-color');
	});


	//When add color is pressed
		//Show color select or hide the color select

	//When color sliders change
		//update the new color 

	//when add color is pressed
		//append the color to the controls 
		//Select the new color

	// On mouse events on the canvas
		// Draw lines
});


$(document).ready(function(){

	var switchStatus = true;

	$(document).on('click', 'button', function() {

		switchStatus = !switchStatus;

		$('body').toggleClass('light').toggleClass('dark');

		$('button').toggleClass('on').toggleClass('off');

		if ( switchStatus = false) {
			$('status').text("Hey, who turn off the lights?");
		}
	});

});








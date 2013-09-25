$(function() {

	$("#first").rlAccordion();

	$("#second").rlAccordion('single', {
		childNum: 1
	});

	$("#thirth").rlAccordion('mix', {
		childNum: 2
	});

});
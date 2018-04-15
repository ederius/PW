

	
	$(document).ready(function() {
		$('#fullpage').fullpage({
			scrollBar:true,
			autoScrolling:true,	
			controlArrows: true,
			verticalCentered: true,
			responsiveWidth: 760,
			responsiveHeight: 0,
			responsiveSlides: false,
			parallax: false,
			scrollOverflow:false,
			slidesNavigation:false,
			navigation:true
		});

		window.sr = ScrollReveal();
			sr.reveal('.animate');

	});
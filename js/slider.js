$(document).ready(function(){
	$('.price-slider').slick({
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true,
		cssEase: 'linear',
		touchMove: true,
		prevArrow: '<button class="arrow arrow-left"></button>',
		nextArrow: '<button class="arrow arrow-right"></button>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					// arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1024,
				settings: {
					// arrows: false,
					centerMode: true,
					centerPadding: '280px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					// arrows: false,
					centerMode: true,
					centerPadding: '140px',
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			}
		]
	});


});
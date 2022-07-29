$(document).ready(function() { 
	$('.portfolio__slider').slick({
		prevArrow: $('.portfolio__tab--prev'), 
		nextArrow: $('.portfolio__tab--next')
	  });

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: false,
		dots: false,
		focusOnSelect: true
	  });

	  $('.reviews__slider').slick({
			arrows: true,
	  });

	  $('.sale__slider').slick({
		arrows: true,
  });
});

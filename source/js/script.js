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
		focusOnSelect: true,
		initialSlide: 1
	  });

	  $('.reviews__slider').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
  		arrows: true,  		
	    adaptiveHeight: true
	  });

	  $('.sale__slider').slick({
		arrows: true
  	  });
});

//galery

$(document).ready(function() {
	$('.portfolio__item').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

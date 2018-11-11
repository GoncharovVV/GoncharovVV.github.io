$(document).ready(function(){
	Slider();
	$('.js_open_menu').click(function() {
		$(".nav-menu").slideToggle("slow");
		$(".open_menu").toggleClass( "open");
		return false;
 	});
 	$(".js_select").select2({
 	});
});
function Slider() {
	$('.items').slick({
	nextArrow: '<svg class="svg_icon slick-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right-arrow"></use></svg>',
	prevArrow: '<svg class="svg_icon slick-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left-arrow"></use></svg>',
	dots: true,
	arrows: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	fade: true,
	cssEase: 'linear'
	});
	$('.js_slider').slick({
	nextArrow: '<svg class="svg_icon slick-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right-arrow"></use></svg>',
	prevArrow: '<svg class="svg_icon slick-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left-arrow"></use></svg>',
	dots: true,
	arrows: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	lazyLoad: 'ondemand',
	cssEase: 'linear',
	responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 401,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
$(window).scroll(function() {
	var header = $(".js_on_move");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 10) {
			 header.removeClass('js_on_move').addClass("scroll");
		} else {
			 header.removeClass("scroll").addClass('js_on_move');
		}
	});
});
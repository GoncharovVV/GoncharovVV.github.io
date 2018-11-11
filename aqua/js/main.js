$(document).ready(function(){
	$( ".js_action" ).on( "click", function() {
				$( ".menu" ).slideToggle(300);
				var $this = $(this);
				if ($this.hasClass('open')) {
					$this.removeClass('open');
				}
				else {
					$this.addClass('open');
				}
		});
		$(".menu-link").bind("click", function () {
				var target = $(this).attr("href");
				
				$("html, body").stop().animate({
								scrollTop: $(target).offset().top
						}, 600);
				
				return false;
		});
	 $('.js-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
	 });
});

$(window).load(function() {
	
});

$(window).scroll(function() {
	
});
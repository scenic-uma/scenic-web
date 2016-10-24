(function ($) {

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	$(function() {
		var mapOptions = {
			center: new google.maps.LatLng(36.716766,-4.499695),
			zoom: 15,
			disableDefaultUI: true,
			scrollwheel: false,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
    	};
    	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	  	var marker = new google.maps.Marker({
      		position: map.getCenter(),
      		map: map,
  		    animation: google.maps.Animation.DROP,
  		    url: "https://www.google.es/maps/dir//Centro+Andaluz+de+Investigaci%C3%B3n+en+Tecnolog%C3%ADas+Inform%C3%A1ticas+(CAITI),+Arquitecto+Francisco+Pe%C3%B1alosa,+18,+29071+M%C3%A1laga/@36.716766,-4.499695,17z",
      		title:"Edificio CAITI"

  		});
		google.maps.event.addListener(marker, 'click', function() {
    		window.open(marker.url);

  		});
	});


	// Fix for contact modal data reload
	$('body').on('hidden.bs.modal', '.modal', function () {
	    $(this).removeData('bs.modal');
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  e.relatedTarget.children[1].style.display = 'inline-block';
	  e.target.children[1].style.display = 'none'

	})

})(jQuery);

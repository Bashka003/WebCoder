$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.header--regform__slider').slick({
        dots: true,
		speed: 300,
		slidesToShow: 1,

	});
	$('.information-block__list__slider').slick({
		dots: false,
		arrows: true,
		speed: 300,
		slidesToShow: 5,
		
	});
	$('nav.nav-tabs').click(function (e) {
		e.preventDefault()
		$('nav.nav-tabs a:first').tab('show') 
		$('nav.nav-tabs a:last').tab('show')
	});

	var slider = document.getElementById('slider');
	noUiSlider.create(slider, {
		start: [20, 80],
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});

	var bar = new ldBar("#bar", {
		"stroke": '#f00',
		"stroke-width": 10
	   });
});

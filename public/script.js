$(document).ready(function () {
	// wow initiation
	new WOW().init()

	// navigation bar toggle
	$("#navbar-toggler").click(function () {
		$(".navbar-collapse").slideToggle(400)
	})

	// navbar bg change on scroll
	$(window).scroll(function () {
		let pos = $(window).scrollTop()
		if (pos >= 100) {
			$(".navbar").addClass("cng-navbar")
		} else {
			$(".navbar").removeClass("cng-navbar")
		}
	})

	// sample video popup
	document.getElementById("video").addEventListener("click", function () {
		swal(`Sorry video not available
    We will fix it soon.
    Stay with us`)
	})

	// team carousel
	$(".team .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		autoplay: true,
		dots: true,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	})

	// faq accordion
	$(".faq-head").each(function () {
		$(this).click(function () {
			$(this).next().toggleClass("show-faq-content")
			let icon = $(this).children("span").children("i").attr("class")

			if (icon == "fas fa-plus") {
				$(this).children("span").html('<i class = "fas fa-minus"></i>')
			} else {
				$(this).children("span").html('<i class = "fas fa-plus"></i>')
			}
		})
	})

	// testimonial carousel
	$(".testimonial .owl-carousel").owlCarousel({
		loop: true,
		autoplay: true,
		dots: true,
		nav: false,
		items: 1,
	})
})

document.querySelector(".sendMail").addEventListener("click", function () {
    window.open("mailto:rknetwork84@gmail.com",'_blank');
})
document.getElementById("map").addEventListener("click", function () {
	window.open("https://www.google.com/maps/@24.6925859,90.4111876,124m/data=!3m1!1e3!5m1!1e4", '_blank');
		
})

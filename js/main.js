$(function() {
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			$(".navbar").addClass("navbar-active");
		} else {
			$(".navbar").removeClass("navbar-active");
		}
	});
});
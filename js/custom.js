

$(document).ready(function () {

    var menu = $('#navme');
    var origOffsetY = menu.offset().top;

    if ($(window).scrollTop() >= origOffsetY) {
        $('#navme').addClass('sticky');
    }
    
    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('#navme').addClass('sticky');

	    /*
	    $( "#navme" ).animate({
		opacity: 1.0,
	    }, 1000 );
	    */
            //$('.content').addClass('menu-padding');
        } else {
	    $('#navme').removeClass('sticky');
            //$('.content').removeClass('menu-padding');
        }
    }

    document.onscroll = scroll;

    $(".nav a").on("click", function(){
	$(".nav").find(".active").removeClass("active");
	$(this).parent().addClass("active");
    });


    
});






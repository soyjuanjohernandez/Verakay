
$(document).ready(function() {
    $(window).stellar();
	// Refreshes parallax content on window load and resize
 
    
});








$(document).ready(

  function() { 

   $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
       scrollspeed:200,
       mousescrollstep:60,
        cursorborder:"0px solid #fff",
    });
      });



//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 20) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});




<!--------------------------->

$(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: true,
    animationLoop: true,
    slideshow: true,
	slideshowSpeed: 1700,
	pauseOnHover:true,
	pauseOnAction:true,
	direction:"horizontal",
    sync: "#carousel"
  });
});





<!--Para versión de escritorio-->

$(function () { 
            $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () { 
                    $('.navbar-toggle:visible').click(); 
            }); 
    });
<!--Para versión celular-->
   $(function () {
            $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                    $('.navbar-toggle:visible').click();
            });
    });
	
	
	
	/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

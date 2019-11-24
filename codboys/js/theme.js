jQuery(function($) {

    "use strict";

    var config = $('html').data('config') || {},
		preloader = $('.tm-preload');

    // Social buttons
    $('article[data-permalink]').socialButtons(config);

    // add modal data attribute
    $(".tm-modal-link").attr("data-uk-modal", "{center:true}");

    // modal keyboard navigation
	$(window).keyup(function(e) {
	  var key = e.which | e.keyCode;
	  if (key === 27) {
	    $('.uk-modal.uk-open .uk-modal-close').click();
	  }
	});

    // preloader
	$(window).on("load",function(){preloader.removeClass('loading').fadeOut(400,function(){})}),$(window).on("beforeunload",function(){preloader.addClass('loading').fadeIn(400,function(){})});

});
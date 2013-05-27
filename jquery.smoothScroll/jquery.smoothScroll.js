(function($)
{
  "use strict";

  $.fn.smoothScroll = function(options)
  {

    /**
     * Option
     */
    options = $.extend({
      play: 50
    , duration: 500
    , easing: ''
    }, options);

    /**
     * Core
     */
    return this.each(function()
    {
      var $target = $(this).find('a[href*=#]')
        , adjustment
        ;

      $target
        .on('click', function() {
            adjustment = $(this.hash).offset().top;
            $('body, html')
              .stop()
              .animate({
                scrollTop: adjustment + options.play
              }
              , options.duration
              , options.easing
              );
        });
    });

  }
}
(jQuery));
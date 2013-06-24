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
    , withHash: true
    }, options);

    /**
     * Core
     */
    return this.each(function()
    {
      var $target
        , adjustment
        ;

      if (options.withHash === true) {
        $target = $(this).find('a[href*=#]');
      }
      else {
        $target = $(this);
      }

      $target
        .on('click', function() {

          if ($(this.hash)) {
            adjustment = $(this.hash).offset().top;
          }
          else {
            return false;
          }

          $('body, html')
            .stop()
            .animate({
              scrollTop: adjustment + options.play
            }
            , options.duration
            , options.easing
            );

          return false;

        });
    });

  }
}
(jQuery));
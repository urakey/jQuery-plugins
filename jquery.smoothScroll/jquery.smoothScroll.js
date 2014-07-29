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
      var $target    = $(this)
        , adjustment = 0
        ;

      if (options.withHash) $target = $(this).find('a[href*=#]');

      $target
        .on('click', function() {

          if ($(this.hash)) adjustment = $(this.hash).offset().top;
          console.log(adjustment);

          $('body, html')
            .stop()
            .animate({
              scrollTop: adjustment - options.play
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

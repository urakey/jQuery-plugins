(function($)
{
  "use strict";

  $.fn.elementRollover = function(options)
  {

    /**
     * Option
     */
    options = $.extend({
      opacity: .7
    , duration: 200
    , easing: ''
    }, options);

    /**
     * Core
     */
    return this.each(function()
    {
      var $target = $(this);

      $target
        .css({ cursor:'pointer' })
        .on({
          'mouseenter': function(){
            $(this).stop().animate({
              opacity: options.opacity
            }
            , options.duration
            , options.easing
            );
          }
        , 'mouseleave': function(){
            $(this).stop().animate({
              opacity: 1
            }
            , options.duration
            , options.easing
            );
          }
        });
    });

  }
}
(jQuery));
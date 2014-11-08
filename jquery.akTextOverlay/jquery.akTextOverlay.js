/*!
 * jQuery.akTextOverlay
 * Version: 0.1
 *
 * Copyright(c) 2014 akey <akey@chocolateboard.net>
 * MIT Licensed
 */
(function($)
{
  'use strict';

  $.fn.akTextOverlay = function(options) {

    /**
     * Option - defaults
     */
    // MEMO: HEX値を#付きで渡せるようにするかどうか検討中
    options = $.extend({
      backgroundColor: '000000',
      opacity: 0.7,
      color: 'ffffff',
      direction: 'toT',
      tag: 'div',
      className: '',
      transition: true,
      duration: 300,
      easing: 'ease'
    }, options);

    /**
     * Core
     */
    return this.each(function(){

      var $target = $(this),
          targetW = $target.width(),
          targetH = $target.height(),
          style;

      createTextLayer($target, options);
      $target.css({ position: 'relative', overflow: 'hidden', width: targetW, height: targetH });

      var $text =  $target.find(options.tag);
      initializeTextStyle($text, options, targetW, targetH);

      // MEMO: animate のときに easing を渡せるようにするか迷ってる（IE9以下のために手厚くしたくない）
      var animateFunc = options.transition ? 'css' : 'animate';
      var animatDuration = options.transition ? '' : options.duration;

      $target.on({
        mouseenter: function() {
          style = moveTextPosition(options);
          $text[animateFunc](style, animatDuration);
        },
        mouseleave: function() {
          style = initTextPosition(options, targetW, targetH);
          $text[animateFunc](style, animatDuration);
        }
      });

    });

    /**
     * Method - private
     */
    // 画像の上に重なるDOMを作る
    function　createTextLayer($dom, options) {
      // MEMO: attr() でも値の取得は可能だけど data() にしといた
      // data* 属性を上書きしたいときは attr() だと都合が悪いらしい（https://w3g.jp/blog/studies/jquery-data-attr-cache）
      var text = $dom.find('img').data('text');

      var htmlSrc = '<' + options.tag + '>';
      if (options.className) htmlSrc  = '<' + options.tag + ' class="' + options.className + '">';
      htmlSrc += text;
      htmlSrc += '</' + options.tag + '>';

      $dom.find('img').after(htmlSrc);
    }

    // $text のスタイルの初期化をする
    function　initializeTextStyle($dom, options, width, height) {
      var backgroundColor = hexToRGBA(options.backgroundColor, options.opacity);
      var style = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'rgba(' + backgroundColor + ')',
        color: '#' + options.color,
        boxSizing: 'border-box'
      };
      $.extend(style, initTextPosition(options, width, height));

      if (options.transition) {
        var transition = {
          transitionProperty: 'top, left',
          transitionDuration: options.duration / 1000 + 's',
          transitionTimingFunction: options.easing,
        };

        $.extend(style, transition);
      }
      $dom.css(style);
    }

    // HEX値（16進数）をRGB値（10進数）に変更して、カンマ区切りで RGBA を返す
    function　hexToRGBA(hex, opacity) {
      var i, rgb, rgba;

      rgb = [hex.substr(0, 2), hex.substr(2, 2), hex.substr(4, 2)];
      rgba = [];

      for (i = 0; i < rgb.length; i++) {
        rgba.push(parseInt(rgb[i], 16));
      }
      rgba.push(opacity);
      rgba = rgba.join(',');

      return rgba;
    }

    // テキストレイヤーの初期位置を設定
    function　initTextPosition(options, width, height) {
      var style = {};

      switch(options.direction) {
        case 'toT':
          style.top = height + 'px';
          break;
        case 'toB':
          style.top = '-' + height + 'px';
          break;
        case 'toR':
          style.left = width + 'px';
          break;
        case 'toL':
          style.left = '-' + width + 'px';
          break;
        default:
          style.top = height + 'px';
      }
      return style;
    }

    // テキストレイヤーの移動後の位置
    function　moveTextPosition(options) {
      var style = {};

      switch(options.direction) {
        case 'toT':
        case 'toB':
          style.top = 0;
          break;
        case 'toR':
        case 'toL':
          style.left = 0;
          break;
        default:
          style.top = 0;
      }
      return style;
    }
  };

})(jQuery);

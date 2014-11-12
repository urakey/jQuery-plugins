/*!
 * jquery.akInstagram
 * Version: 0.1
 *
 * Copyright(c) 2014 Aki Fukayama <akey@chocolateboard.net>
 * MIT Licensed
 */
(function($)
{
  'use strict';

  $.fn.akInstagram = function(options)
  {
    /**
     * Option - defaults
     */
    options = $.extend({
      access_token: '',
      request_url: '',
      link: true,
      count: 20,
      size: 'thumbnail',
      tag: 'div',
      className: ''
    }, options);

    /**
     * Core
     */
    return this.each(function()
    {
      var $target = $(this);
      loadPhotos($target, options);
    });

    /**
     * Method - private
     */
    function loadPhotos($dom, options) {
      var d          = $.Deferred();
      var data       = {};
      var dataType   = null;
      var requestUrl = null;

      // access_token が指定されていた場合
      if (options.access_token) {
        requestUrl = 'https://api.instagram.com/v1/users/self/media/recent/';
        dataType = 'jsonp';
        data.access_token = options.access_token;
      }

      // request_url が指定されていた場合
      if (options.request_url) {
        requestUrl = options.request_url;
        dataType = 'json';
      }

      $.ajax({
        type : 'GET',
        url  : requestUrl,
        dataType: dataType,
        data : data
      })
      .done(function(data) {
        if (data.meta.code == 200) appendHtml($dom, formatHtml(data, options));
        d.resolve();
      })
      .fail(function(e) {
        console.log(e);
      });
      return d.promise();
    }

    function formatHtml(data, options) {
      var items   = data.data;
      var count   = options.count;
      var books   = data.books;
      var htmlTag = options.tag;
      var item, caption, link, image, imageUrl, imageW, imageH, htmlSrc;
      var newCommers = [];

      if (items.length <= 0) return;
      if (items.length < count) count = items.length;

      for (var i = 0, length = count; i < length; i++) {
        item     = items[i];
        caption  = item.caption;
        link     = item.link;
        image    = item.images[options.size];
        imageUrl = image.url;
        imageW   = image.width;
        imageH   = image.height;

        if (options.filter) filter   = item.filter;

        // MEMO: DOM は自由に作れたほうがいい？あとで検討する
        if (options.className) htmlSrc  = '<' + htmlTag + ' class="' + options.className + '">';
        else htmlSrc  = '<' + htmlTag + '>';

        if (options.link && link ) htmlSrc += '<a href="' + link + '" target="_blank">';
        htmlSrc += '<img src="' + imageUrl + '" alt="' + caption + '" width="' + imageW + '" height="' + imageH + '">';
        if (options.link && link ) htmlSrc += '</a>';
        htmlSrc += '</' + htmlTag + '>';

        newCommers.push(htmlSrc);
      }

      return newCommers;
    }

    function appendHtml($dom, htmlSrcArray) {

      if(htmlSrcArray.length <= 0) return;
      $.each(htmlSrcArray, function(index, htmlSrc){
        $dom.append(htmlSrc);
      });
    }

  };

})(jQuery);
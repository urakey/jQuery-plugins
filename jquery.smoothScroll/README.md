# jquery.smoothScroll.js

> お勉強プラグインシリーズ。スムーススクロールプラグイン。

## Demo

準備中


## Usage

指定したセレクタ内の `a[href*=#]` が `click` されると、その位置までするするスクロールします。スクロール位置に遊びを持たせられるように `play` というオプションを用意しています。

    // Format:
    $(selector).smoothScroll({
      play: value
    , duration: value
    , easing: value
    });

    // Examples:
    $('.navigation').smoothScroll();

    // Examples:
    $('.navigation').smoothScroll({
      play: 20
    , duration: 300
    , easing: ''
    });

Easing はプラグインに含まれていないので、使用する場合は必ず必要な Easing を JS ファイル内に書いてください。

* [jQuery Easing Plugin (version 1.3)](http://gsgd.co.uk/sandbox/jquery/easing/)


# Options

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>play</th>
      <td>Number</td>
      <td>50</td>
      <td></td>
    </tr>
    <tr>
      <th>duration</th>
      <td>Number</td>
      <td>500</td>
      <td></td>
    </tr>
    <tr>
      <th>easing</th>
      <td>String</td>
      <td>-</td>
      <td></td>
    </tr>
  </tbody>
</table>


# Changelog

まだないよ
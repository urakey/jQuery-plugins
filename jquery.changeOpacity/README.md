# jQuery.changeOpacity.js

> お勉強プラグインシリーズ。ロールオーバー時にふわっと透過度を変えるプラグイン。


## Demo

[CodePen](http://codepen.io/akey/pen/KdCle)


## Usage

    // Format:
    $(selector).changeOpacity({
      opacity: value,
      duration: value,
      easing: value
    });

    // Examples:
    $('.rollover').changeOpacity();

    // Examples:
    $('.rollover').changeOpacity({
      opacity: .5,
      duration: 300,
      easing: ''
    });

Easing はプラグインに含まれていないので、使用する場合は必ず必要な Easing を JS ファイル内に書いてください。

* [jQuery Easing Plugin (version 1.3)](http://gsgd.co.uk/sandbox/jquery/easing/)


## Options

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
      <th>opacity</th>
      <td>Number</td>
      <td>0.7</td>
      <td>ロールオーバー時の透過度。</td>
    </tr>
    <tr>
      <th>duration</th>
      <td>Number</td>
      <td>200</td>
      <td>アニメーションにかける時間。</td>
    </tr>
    <tr>
      <th>easing</th>
      <td>String</td>
      <td>-</td>
      <td>イージングが必要な場合は指定。デフォルトはイージングなし。</td>
    </tr>
  </tbody>
</table>


## Changelog

* 2014.11.03 Demo を CodePen に設置
* 2014.07.29 jQuery.elementRollover.js -> jQuery.changeOpacity.js 名前を変更。

# jQuery.elementRollover.js

> お勉強プラグインシリーズ。ロールオーバー時にふわっと透過度を変えるプラグイン。


## Demo

準備中


## Usage

    // Format:
    $(selector).elementRollover({
      opacity: value
    , duration: value
    , easing: value
    });

    // Examples:
    $('.rollover').elementRollover();

    // Examples:
    $('.rollover').elementRollover({
      opacity: .5
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
      <th>opacity</th>
      <td>Number</td>
      <td>0.7</td>
      <td></td>
    </tr>
    <tr>
      <th>duration</th>
      <td>Number</td>
      <td>200</td>
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
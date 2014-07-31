# jquery.textOverlay.js

> お勉強プラグインシリーズ。画像の上に文字がスライドインするのを簡単にするプラグイン。

## Demo

準備中


## Usage

    // Format:
    $(selector).textOverlay({
      backgroundColor: '000000',
      opacity: 0.7,
      color: 'ffffff',
      direction: 'toT',
      tag: 'div',
      className: '',
      transition: true,
      duration: 300,
      easing: 'ease'
    });

    // Examples:
    $('.rollover').textOverlay();

    // Examples:
    $('.rollover').textOverlay({
      backgroundColor: '444444',
      opacity: 0.9,
      className: 'overlayText',
    });


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
      <th>backgroundColor</th>
      <td>String</td>
      <td>000000</td>
      <td>背景色</td>
    </tr>
    <tr>
      <th>opacity</th>
      <td>Number</td>
      <td>0.7</td>
      <td>背景色の透過度</td>
    </tr>
    <tr>
      <th>color</th>
      <td>String</td>
      <td>ffffff</td>
      <td>文字色</td>
    </tr>
    <tr>
      <th>direction</th>
      <td>String</td>
      <td>toT</td>
      <td>スライドインする方向（toT, toB, toL, toR）</td>
    </tr>
    <tr>
      <th>tag</th>
      <td>String</td>
      <td>div</td>
      <td>テキストをラップするタグ</td>
    </tr>
    <tr>
      <th>className</th>
      <td>String</td>
      <td>-</td>
      <td>テキストをラップするタグにつけるクラス</td>
    </tr>
    <tr>
      <th>transition</th>
      <td>String</td>
      <td>true</td>
      <td>transition を使うか<br>※IE9でも動かしたい場合に`false`にする（`animate`で動くようになります）</td>
    </tr>
    <tr>
      <th>duration</th>
      <td>Number</td>
      <td>300</td>
      <td>スライドにかかる時間（ミリ秒単位）</td>
    </tr>
    <tr>
      <th>easing</th>
      <td>String</td>
      <td>ease</td>
      <td>イージング<br>※`cubic-bezier(0.42, 0, 0.58, 1.0)`とかでもOK<br>※`transition`が`false`の場合は無視される</td>
    </tr>
  </tbody>
</table>


## ToDo

* IE8以下の背景色の対応をするかも


## Changelog

* 2014.07.31 `opacity` オプションを String -> Number に変更
* 2014.07.31 `switch`に`default`を設定


## Other

イージングはここで確認するのがおすすめ: [http://easings.net/ja](http://easings.net/ja)
# jquery.akInstagram.js

> お勉強プラグインシリーズ。Instagram の API からデータを取得するプラグイン。


## Demo

[CodePen](http://codepen.io/akey/pen/GgRRqd)


## Usage

    // Format:
    $(selector).akInstagram({
      request_url: YOUR_REQUEST_URL,
      link: true,
      count: 20,
      size: 'thumbnail',
      tag: 'div',
      className: ''
    });

    // Examples:
    $('#modInstagram').akInstagram({
      request_url: YOUR_REQUEST_URL
    });

    // Examples:
    $('#modInstagram').akInstagram({
      access_token: YOUR_ACCESS_TOKEN
    });

    // Examples:
    $('#modInstagram').akInstagram({
      request_url: YOUR_REQUEST_URL,
      link: false,
      count: 10,
      size: 'thumbnail',
      tag: 'li',
      className: 'instagramItem'
    });

`request_url` と `access_token` はどちらか片方を必ず指定してください。
JS ファイル内に `access_token` を直接記述することは推奨できませんので、直書きする場合は自己責任で mm

`instagram.php` は、サーバサイドで「アクセストークンを使ってデータを取得する処理をしてくれる」ファイルのサンプルです。
`instagram.php` をこのまま使用する場合、ご自身で取得したアクセストークンを記載してください。

    $access_token = '211242.....'; // アクセストークンを書く


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
      <th>request_url</th>
      <td>String</td>
      <td>-</td>
      <td>サーバサイドで「アクセストークンを使ってデータを取得する処理をしてくれる」ファイルの URL<br>※JS ファイルに直接 <code>access_token</code> を直書きして使用する場合は必要なし。</td>
    </tr>
    <tr>
      <th>access_token</th>
      <td>String</td>
      <td>-</td>
      <td>アクセストークン<br>※ <code>request_url</code> を指定している場合は必要なし。</td>
    </tr>
    <tr>
      <th>link</th>
      <td>Boolean</td>
      <td>true</td>
      <td>リンクの有無</td>
    </tr>
    <tr>
      <th>count</th>
      <td>Number</td>
      <td>20</td>
      <td>アイテムの数<br>※Max 20</td>
    </tr>
    <tr>
      <th>size</th>
      <td>String</td>
      <td>thumbnail</td>
      <td>
        <p>画像のサイズ</p>
        <ul>
          <li>thumbnail - 小（150px）</li>
          <li>low_resolution - 中（306px）</li>
          <li>standard_resolution - 大（640px）</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>tag</th>
      <td>String</td>
      <td>div</td>
      <td>アイテムをラップするタグ</td>
    </tr>
    <tr>
      <th>className</th>
      <td>String</td>
      <td>-</td>
      <td>アイテムをラップするタグにつけるクラス</td>
    </tr>
  </tbody>
</table>


## ToDo

* DOM のとこなおすかも


## Changelog

まだないよ

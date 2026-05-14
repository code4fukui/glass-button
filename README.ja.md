# glass-button

美しく透明感のあるガラス風ボタンを作成するための、依存関係のないシンプルなWebコンポーネントです。

## デモ

https://code4fukui.github.io/glass-button/


![暗赤色の背景に「BUTTON」という長方形のボタンと「送信」というカプセル型のボタンが表示されており、どちらも光沢と透明感のあるガラス効果が施されています。](https://user-images.githubusercontent.com/1715217/199616008-5224b71c-643d-4fc9-a2ff-7c319e35f5b7.jpg)

## 特徴

-   **2つのスタイル:** `<glass-button>`（長方形）と `<glass-button-round>`（カプセル型）の要素を提供します。
-   **ピュアWebコンポーネント:** 依存関係やフレームワークは不要です。モダンブラウザでそのまま動作します。
-   **グラスモーフィズム効果:** どのような背景にも馴染む、透明感と光沢のあるボタンを描画します。
-   **ホバーアニメーション:** ホバー時に文字間隔が広がり、テキストが明るくなる控えめなエフェクトを備えています。
-   **カスタマイズ可能:** CSS Shadow Partsを使用して、デフォルトのスタイルを簡単に上書きできます。

## 使い方

### HTML

CDNからモジュールを読み込み、HTML内で直接カスタム要素を使用します。

```html
<script type="module" src="https://code4fukui.github.io/glass-button/glass-button.js"></script>

<glass-button>BUTTON</glass-button>
<glass-button-round>送信</glass-button-round>
```

### JavaScript

クラスをインポートして、プログラムからボタンのインスタンスを作成することも可能です。

```javascript
import { GlassButton, GlassButtonRound } from "https://code4fukui.github.io/glass-button/glass-button.js";

const myButton = new GlassButton("BUTTON");
document.body.appendChild(myButton);

const myRoundButton = new GlassButtonRound("送信");
document.body.appendChild(myRoundButton);
```

## カスタマイズ

CSS Shadow Partの `glass-button` をターゲットにすることで、独自のスタイルシートからボタンの外観をカスタマイズできます。このセレクターは `<glass-button>` と `<glass-button-round>` の両方で機能します。

```css
/* 例: ボタンのサイズと背景グラデーションを変更 */
glass-button::part(glass-button) {
  width: 300px;
  height: 75px;
  background: radial-gradient(rgba(200, 90, 90, .3) 0%, rgba(158, 95, 162, 0) 90%);
}
```

## クレジット

-   デザイン: [@ash_creator](https://twitter.com/ash_creator/status/1587052503778017280)
-   プログラミング: [Code for FUKUI](https://code4fukui.github.io/)

## ライセンス

[MIT](LICENSE)

# glass-button

グラス風のボタンを簡単に使えるライブラリです。ガラス質な質感のボタンを HTML や JavaScript で作成できます。

## デモ
https://code4fukui.github.io/glass-button/

## 機能
- `<glass-button>` と `<glass-button-round>` の2つのカスタム HTML 要素を提供
- CSS で簡単にボタンのスタイルを変更可能
- ホバー時にテキストの色とレタースペースが変化する演出

## 使い方

### HTML で使う

```html
<script type="module" src="https://code4fukui.github.io/glass-button/glass-button.js"></script>
<glass-button id=btn1>BUTTON</glass-button>
<glass-button-round id=btn2>送信</glass-button-round>
```

### JavaScript で使う

```javascript
import { GlassButton, GlassButtonRound } from "https://code4fukui.github.io/glass-button/glass-button.js";

document.body.appendChild(new GlassButton("BUTTON"));
document.body.appendChild(new GlassButtonRound("送信"));
```

## ライセンス
このライブラリは MIT ライセンスで提供されています。
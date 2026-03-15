# glass-button

グラスボタン UI コンポーネントを簡単に使えるライブラリです。ボタンの外見がガラス質な雰囲気になります。

## デモ

https://code4fukui.github.io/glass-button/

![glass-button](https://user-images.githubusercontent.com/1715217/199616008-5224b71c-643d-4fc9-a2ff-7c319e35f5b7.jpg)

## 機能

- 簡単な HTML や JavaScript からボタンを利用できる
- 角丸タイプのボタンも用意

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
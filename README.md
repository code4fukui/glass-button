# glass-button

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of custom HTML elements for creating glass-style buttons.

## Demo
https://code4fukui.github.io/glass-button/

![glass-button](https://user-images.githubusercontent.com/1715217/199616008-5224b71c-643d-4fc9-a2ff-7c319e35f5b7.jpg)

## Features
- `<glass-button>` and `<glass-button-round>` custom HTML elements
- Configurable button styles with CSS
- Hover effect with changing text color and letter-spacing

## Usage

### In HTML

```html
<script type="module" src="https://code4fukui.github.io/glass-button/glass-button.js"></script>
<glass-button id=btn1>BUTTON</glass-button>
<glass-button-round id=btn2>送信</glass-button-round>
```

### In JavaScript

```javascript
import { GlassButton, GlassButtonRound } from "https://code4fukui.github.io/glass-button/glass-button.js";

document.body.appendChild(new GlassButton("BUTTON"));
document.body.appendChild(new GlassButtonRound("送信"));
```

## Credit
- Designed by [@ash_creator](https://twitter.com/ash_creator/status/1587052503778017280)
- Programmed by [Code for FUKUI](https://code4fukui.github.io/)

## License
MIT License — see [LICENSE](LICENSE).
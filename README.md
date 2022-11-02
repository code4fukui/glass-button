# glass-button

https://code4fukui.github.io/glass-button/

![glass-button](https://user-images.githubusercontent.com/1715217/199616008-5224b71c-643d-4fc9-a2ff-7c319e35f5b7.jpg)

## Usage

### in HTML

```html
<script type="module" src="https://code4fukui.github.io/glass-button/glass-button.js"></script>
<glass-button id=btn1>BUTTON</glass-button>
<glass-button-round id=btn2>送信</glass-button-round>
```

### in JavaScript

```javascript
import { GlassButton, GlassButtonRound } from "https://code4fukui.github.io/glass-button/glass-button.js";

document.body.appendChild(new GlassButton("BUTTON"));
document.body.appendChild(new GlassButtonRound("送信"));
```

## Credit

- designed by [@ash_creator](https://twitter.com/ash_creator/status/1587052503778017280)
- programmed by [Code for FUKUI](https://code4fukui.github.io/)

# glass-button

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, dependency-free web component for creating beautiful, translucent glass-style buttons.

## Demo

https://code4fukui.github.io/glass-button/


![A rectangular "BUTTON" and a pill-shaped button with Japanese text ("送信")
 are shown on a dark red background, both with a glossy, translucent glass effect.](https://user-images.githubusercontent.com/1715217/199616008-5224b71c-643d-4fc9-a2ff-7c319e35f5b7.jpg)

## Features

-   **Two Styles:** Provides `<glass-button>` (rectangular) and `<glass-button-round>` (pill-shaped) elements.
-   **Pure Web Components:** No dependencies or frameworks required. Works directly in modern browsers.
-   **Glassmorphism Effect:** Renders a translucent, glossy button that adapts to any background.
-   **Hover Animation:** A subtle hover effect that increases letter spacing and text brightness.
-   **Customizable:** Easily override default styles using CSS Shadow Parts.

## Usage

### HTML

Load the module from a CDN and use the custom elements directly in your HTML.

```html
<script type="module" src="https://code4fukui.github.io/glass-button/glass-button.js"></script>

<glass-button>BUTTON</glass-button>
<glass-button-round>送信</glass-button-round>
```

### JavaScript

You can also import the classes and create button instances programmatically.

```javascript
import { GlassButton, GlassButtonRound } from "https://code4fukui.github.io/glass-button/glass-button.js";

const myButton = new GlassButton("BUTTON");
document.body.appendChild(myButton);

const myRoundButton = new GlassButtonRound("送信");
document.body.appendChild(myRoundButton);
```

## Customization

You can customize the button's appearance from your own stylesheet by targeting its CSS Shadow Part, `glass-button`. This selector works for both `<glass-button>` and `<glass-button-round>`.

```css
/* Example: Change the button's size and background gradient */
glass-button::part(glass-button) {
  width: 300px;
  height: 75px;
  background: radial-gradient(rgba(200, 90, 90, .3) 0%, rgba(158, 95, 162, 0) 90%);
}
```

## Credit

-   Designed by [@ash_creator](https://twitter.com/ash_creator/status/1587052503778017280)
-   Programmed by [Code for FUKUI](https://code4fukui.github.io/)

## License

[MIT](LICENSE)
// designed by @ash_creator
// https://twitter.com/ash_creator/status/1587052503778017280
// https://codepen.io/ash_creator/pen/JjZYzdo
// programmed by Code for FUKUI

const CSS_GLASS_BUTTON = `
glass-button, glass-button-round {
  display: block;
  position: relative;
  width: 240px;
  height: 60px;
  background: rgb(153,191,187);
  background: radial-gradient(rgba(93,108,107,.3) 0%, rgba(95,162,158,0) 90%);
  box-shadow: 0 0 24px rgba(116,132,145,1);
  transition: all .7s ease;
}
glass-button::before, glass-button-round::before {
  content: '';
  position: absolute;
  z-index: 2;
  top: -4px;
  left: 0;
  width: 66.7%; /*160px; */
  height: 10px;
  border-radius: 50%;
  background: rgb(170,255,240);
  background: radial-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,0) 33%, rgba(255,255,255,0) 100%);
}
glass-button::after, glass-button-round::after {
  content: '';
  position: absolute;
  z-index: 2;
  bottom: -4px;
  right: 0;
  width: 66.7%; /*160px;*/
  height: 10px;
  border-radius: 50%;
  background: rgb(170,255,240);
  background: radial-gradient(rgba(255,255,255,1) 0%, rgba(255,255,255,0) 33%, rgba(255,255,255,0) 100%);
}
.button__wrapper {
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 0 100%, 0.7% 100%, 0.7% 3%, 99.3% 3%, 99.3% 98%, 0% 98%, 0% 100%, 100% 100%, 100% 0%);
  background-color:hsla(0,0%,100%,1);
  background-image:
  radial-gradient(at 0% 0%, hsla(180,100%,98%,1) 0px, transparent 50%),
  radial-gradient(at 29% 0%, hsla(189,100%,78%,1) 0px, transparent 50%),
  radial-gradient(at 0% 48%, hsla(355,0%,100%,1) 0px, transparent 50%),
  radial-gradient(at 100% 62%, hsla(340,0%,100%,1) 0px, transparent 50%),
  radial-gradient(at 90% 98%, hsla(169,88%,83%,1) 0px, transparent 50%),
  radial-gradient(at 26% 100%, hsla(240,0%,44%,1) 0px, transparent 50%),
  radial-gradient(at 79% 0%, hsla(336,0%,51%,1) 0px, transparent 50%);
}
.button__box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 3%;
  left: 0.8%;
  width: 98.4%;
  height: 94%;
  color: rgba(255,255,255,.7);
  letter-spacing: 2px;
  background: rgb(255,255,255);
  background: linear-gradient(120deg, rgba(255,255,255,.4) 0%, rgba(255,255,255,0) 50%);
  transition: all 1s ease;
}
.button__box::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, rgba(255,255,255,.4), rgba(255,255,255,0));
  clip-path: path('M215.98,12.57c8.09,0,16.1,.12,24.02,.33V0H0V44.89C53.01,25.06,130.12,12.57,215.98,12.57Z');
}
glass-button-round {
  border-radius: 30px;
}
glass-button-round .button__wrapper {
  clip-path: path('M210,1c15.99,0,29,13.01,29,29s-13.01,29-29,29H30C14.01,59,1,45.99,1,30S14.01,1,30,1H210m0-1H30C13.43,0,0,13.43,0,30s13.43,30,30,30H210c16.57,0,30-13.43,30-30S226.57,0,210,0h0Z');
}
glass-button-round .button__box {
  border-radius: 30px;
  overflow: hidden;
}
glass-button:hover, glass-button-round:hover {
  box-shadow: 0 0 24px rgba(116,132,145,0);
}
glass-button:hover .button__box, glass-button-round:hover .button__box {
  letter-spacing: 8px;
  color: rgba(255,255,255,1);
}
`;

export class GlassButton extends HTMLElement {
  constructor() {
    super();
    const div = document.createElement("div");
    div.className = "button__wrapper";
    this.appendChild(div);
    const txt = document.createElement("div");
    txt.className = "button__box";
    txt.textContent = "TEST";
    this.appendChild(txt);

    const css = document.createElement("style");
    css.textContent = CSS_GLASS_BUTTON;
    this.appendChild(css);
  }
};

customElements.define("glass-button", GlassButton);

export class GlassButtonRound extends GlassButton {
  constructor() {
    super();
  }
};

customElements.define("glass-button-round", GlassButtonRound);

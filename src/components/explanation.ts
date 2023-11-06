export function initExplanationComp() {
  class ExplanationComp extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();

      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
     @import url('https://fonts.googleapis.com/css2?family=Trade+Winds&display=swap');
     @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
     .explanation__text{
     height:250px;
     color: #000;
    width: 320px;
    display:flex;
    margin: 0 auto;
    justify-content:center;
    align-items:center;
    text-align: center;
    font-family: "Odibee Sans";
    font-size: 47px;
    font-weight: 600;
    line-height: 100%;
    margin-top:80px;

        }

        `;
      this.shadow.appendChild(style);
      const shadow = document.createElement("shadow");
      const div = document.createElement("div");

      div.innerHTML = `
        <h1 class="explanation__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 5 segundos.</h1>
        `;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("explanation-comp", ExplanationComp);
}

export function initTitleComp() {
  class TitleComp extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();

      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap');
      .start-menu__title{
            text-align:center;
            color:#009048;
            font-weight:bold;
            font-size:90px;
       font-family: 'Kanit', sans-serif;
            line-height: 1em;
            margin-top:115px;

        }
        .o{
          color:  #91CCAF;
        }
        `;
      this.shadow.appendChild(style);
      const shadow = document.createElement("shadow");
      const div = document.createElement("div");

      div.innerHTML = `
        <h1 class="start-menu__title">Piedra Papel <span class="o">ó</span> Tijera</h1>
        `;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("title-comp", TitleComp);
}

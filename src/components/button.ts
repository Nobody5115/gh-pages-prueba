export function initButtonComp() {
  class ButtonComp extends HTMLElement {
    shadow: ShadowRoot;
    text: string | null;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.text = this.textContent;
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
      .button{
          align-items:center;
          text-align:center;
          color:#D8FCFC;
          display:flex;
          margin: 0px auto;
          margin-top:110px;
          justify-content:center;
          width: 322px;
          height: 87px;
          border: solid 7px #001997;
          font-size:25px;
          border-radius: 10px;
          background-color: #006CFC;
          font-weight: 400;
          font-family: "Odibee Sans";
           border: none;
    cursor: pointer;
    transition: background-color 0.3s;
       animation: buttonExpand 2s infinite;

        }
        @keyframes buttonExpand {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9); /* El tamaño máximo al que se expandirá */
    }
    100% {
        transform: scale(1);
    }
}

     @media (min-width:450px) {
 .button{
          margin-top:40px;

 }
}
        
        `;
      this.shadow.appendChild(style);
      const shadow = document.createElement("shadow");
      const div = document.createElement("div");

      div.innerHTML = `
<button class="button">${this.text}</button>

 `;
      this.shadow.appendChild(div);
    }
  }
  customElements.define("button-comp", ButtonComp);
}

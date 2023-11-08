import { state } from "../state";
export function initResultComp() {
  class ResultComp extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();

      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const currentState = state.getState();

      const style = document.createElement("style");
      style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap');
      
      .container{
        background-color:red;
        width:300px;
        height:120px;
          border: solid 4px black;
        border-radius:6px;
        display:flex;
        margin:0 auto;
        text-align:center;
        justify-content:center;
        align-items:center;
        font-size:25px;
          font-weight: 400;
          font-family: "Odibee Sans";
      }
      .container-score{
            font-size:20px;
          font-weight: 600;
          font-family: "Odibee Sans";
          background-color:white;
        width:300px;
        height:200px;
           text-align:center;
        justify-content:center;
        align-items:center;
        border: solid 4px black;
        border-radius:6px;
         display:flex;
        margin:0 auto;
        flex-direction:column;
      }
        `;
      this.shadow.appendChild(style);
      const shadow = document.createElement("shadow");
      const div = document.createElement("div");
      const history = state.getHistory();

      div.innerHTML = `
      <div class="container">
      <h2>${currentState.currentGame.ganador}</h2>
      </div><br>
      <div class="container-score">
      <p>Mis puntos:${history[0].myPoint}</p>
      <p>PC puntos:${history[0].computerPoint}</p>
      </div>
        `;
      const cuadradoGanador = div.querySelector(".container");

      if (currentState.currentGame.ganador == "Ganaste") {
        (cuadradoGanador as any).style.backgroundColor = "#6CB46C";
      } else if (currentState.currentGame.ganador == "Empate") {
        (cuadradoGanador as any).style.backgroundColor = "#006CFC";
      }
      this.shadow.appendChild(div);
    }
  }
  customElements.define("result-comp", ResultComp);
}

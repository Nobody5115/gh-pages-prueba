export function initCountComp() {
  class CountComp extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();

      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      const style = document.createElement("style");
      style.innerHTML = `
         
         .timer{
            margin-top:-120px;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
         }
      
       
        

        `;
      this.shadow.appendChild(style);
      const shadow = document.createElement("shadow");
      const div = document.createElement("div");
      div.className = "timer";

      div.innerHTML = ` 
      <svg class="timer__svg" width="244" height="243" viewBox="0 0 244 243" fill="none" xmlns="http://www.w3.org/2000/svg">

 <circle cx="121.5" cy="121.5" r="110"  stroke="black" stroke-width="23" fill="none">
  <animate attributeName="stroke-dasharray" from="1000 696" to="696 696" dur="5s" fill="freeze" begin="0s" />
  <animate attributeName="stroke-dashoffset" from="0" to="696" dur="3s" fill="freeze" begin="0s" />
</circle>

<text class="timer__number" x="50%" y="50%" text-anchor="middle" dy=".3em" fill="black" font-size="124">5</text>
</svg>
</svg>


   
 `;

      const timerSvg = div.querySelector(".timer__svg");

      let count = 5;
      const countdownInterval = setInterval(() => {
        count--;
        if (count < 0) {
          clearInterval(countdownInterval);
        } else {
          const text: any = div.querySelector(".timer__number");

          let result = (text.textContent = count.toString());
        }
      }, 1000);

      this.shadow.appendChild(div);
    }
  }
  customElements.define("count-comp", CountComp);
}

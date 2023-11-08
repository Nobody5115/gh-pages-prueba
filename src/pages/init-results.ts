import { initRouter } from "../router";
export function initResultsPage(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <br>
<result-comp></result-comp>
<button-comp>Volver a jugar</button-comp>
`;
  const button = div.querySelector("button-comp");

  button?.addEventListener("click", () => {
    params.goTo("/explanation");
  });
  return div;
}

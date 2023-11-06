import { initRouter } from "../router";
export function initGamePage(params) {
  console.log(params);

  const div = document.createElement("div");
  div.innerHTML = `
    <title-comp></title-comp>
   <button-comp>Empezar</button-comp>
  
    <hands-comp></hands-comp>
`;
  const button = div.querySelector("button-comp");

  button?.addEventListener("click", () => {
    params.goTo("/explanation");
  });

  return div;
}

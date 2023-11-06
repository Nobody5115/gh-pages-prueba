export function initExplanation(params) {
  const div = document.createElement("div");
  div.innerHTML = `
  <explanation-comp></explanation-comp>
  <button-comp>¡Jugar!</button-comp>
  <hands-comp></hands-comp>

  `;
  const button = div.querySelector("button-comp");
  button?.addEventListener("click", () => {
    params.goTo("/game");
  });
  console.log(button);
  return div;
}

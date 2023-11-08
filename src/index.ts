import { initTitleComp } from "./components/title";
import { initButtonComp } from "./components/button";
import { initHandsComp } from "./components/hands";
import { initExplanationComp } from "./components/explanation";
import { initRouter } from "./router";
import { initCountComp } from "./components/count-down";
import { initComputerPlayComp } from "./components/computerPlay";
import { initResultComp } from "./components/result";
(function () {
  initHandsComp();
  initButtonComp();
  initTitleComp();
  initExplanationComp();
  initCountComp();
  initComputerPlayComp();
  initResultComp();
  initRouter(document.querySelector(".root"));
})();

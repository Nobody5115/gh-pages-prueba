import { initTitleComp } from "./components/title";
import { initButtonComp } from "./components/button";
import { initHandsComp } from "./components/hands";
import { initExplanationComp } from "./components/explanation";
import { initRouter } from "./router";
import { initCountComp } from "./components/count-down";
(function () {
  initHandsComp();
  initButtonComp();
  initTitleComp();
  initExplanationComp();
  initCountComp();

  initRouter(document.querySelector(".root"));
})();

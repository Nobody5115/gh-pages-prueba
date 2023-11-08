import { initGamePage } from "./pages/init-home";
import { initExplanation } from "./pages/init-explanation";
import { initGame } from "./pages/init-game";
import { initFight } from "./pages/init-fight";
import { initResultsPage } from "./pages/init-results";
const routes = [
  {
    path: /\/homepage/,
    component: initGamePage,
  },
  {
    path: /\/explanation/,
    component: initExplanation,
  },
  {
    path: /\/game/,
    component: initGame,
  },
  {
    path: /\/fight/,
    component: initFight,
  },
  {
    path: /\/results/,
    component: initResultsPage,
  },
];

export function initRouter(container: Element | null) {
  function goTo(path: string) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route: string) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container?.firstChild) {
          container.firstChild.remove();
        }
        container?.appendChild(el as any);
      }
    }
  }

  if (
    location.pathname === "/" ||
    location.pathname === "/piedra-papel-tijeras/"
  ) {
    goTo("/homepage");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };

  return { handleRoute, goTo };
}

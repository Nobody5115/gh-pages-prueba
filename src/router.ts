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
const BASE_PATH = "/desafio-m5";

function isGithubPages() {
  return location.host.includes("nobody5115.github.io");
}
export function initRouter(container: Element | null) {
  function goTo(path: string) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route: string) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
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

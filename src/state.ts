type Jugada = "piedra" | "papel" | "tijeras";

type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
      ganador: "",
    },
    history: [
      {
        myPoint: 0,

        computerPoint: 0,
      },
    ],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.data.history.push(play);
  },
  setState(newState) {
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  computerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerPlay = move;
  },
  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
  },
  getHistory() {
    const currentState = this.getState();

    const history = localStorage.getItem("history");
    if (history) {
      const parsedHistory = JSON.parse(history);
      state.data.history = parsedHistory;
    }
    return currentState.history;
  },
  restartGame() {
    this.setMove("");
    this.computerMove("");
  },

  whoIsWin(myMove: Jugada, computerMove: Jugada) {
    const currentState = this.getState();

    let ganador: any;
    const ganoConTijera = myMove == "tijeras" && computerMove == "papel";
    const ganoConPapel = myMove == "papel" && computerMove == "piedra";
    const ganoConPiedra = myMove == "piedra" && computerMove == "tijeras";
    const ganaPcTijera = computerMove == "tijeras" && myMove == "papel";
    const ganaPcPapel = computerMove == "papel" && myMove == "piedra";
    const ganaPcPiedra = computerMove == "piedra" && myMove == "tijeras";
    if ([ganoConPapel, ganoConPiedra, ganoConTijera].includes(true)) {
      ganador = "Ganaste";
    } else if ([ganaPcTijera, ganaPcPiedra, ganaPcPapel].includes(true)) {
      ganador = "Perdiste";
    } else {
      ganador = "Empate";
    }
    currentState.currentGame.ganador = ganador;
    return ganador;
  },
  countPoint(ganador) {
    const currentState = this.getState();

    if (ganador == "Ganaste") {
      currentState.history[currentState.history.length - 1].myPoint++;
    } else if (ganador == "Perdiste") {
      currentState.history[currentState.history.length - 1].computerPoint++;
    }
    localStorage.setItem("history", JSON.stringify(currentState.history));
    return currentState.history;
  },
};

export { state };

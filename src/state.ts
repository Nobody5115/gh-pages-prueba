type Jugada = "piedra" | "papel" | "tijeras";
console.log("state");

type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: [{}],
  },
  getState() {
    return this.data;
  },
  pushToHistory(play: Game) {
    const currentState = this.getState();
    currentState.history(play);
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
  setMove(move: Jugada) {
    console.log(move);

    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
  },

  whoIsWin(myMove: Jugada, computerMove: Jugada) {
    let ganador: any;
    const ganoConTijera = myMove == "tijeras" && computerMove == "papel";
    const ganoConPapel = myMove == "papel" && computerMove == "piedra";
    const ganoConPiedra = myMove == "piedra" && computerMove == "tijeras";
    const ganaPcTijera = computerMove == "tijeras" && myMove == "papel";
    const ganaPcPapel = computerMove == "papel" && myMove == "piedra";
    const ganaPcPiedra = computerMove == "piedra" && myMove == "tijeras";
    if ([ganoConPapel, ganoConPiedra, ganoConTijera].includes(true)) {
      ganador = myMove;
    } else if ([ganaPcTijera, ganaPcPiedra, ganaPcTijera].includes(true)) {
      ganador = computerMove;
    } else {
      ganador = "empate";
    }
    return ganador;
    console.log(ganador);
  },
};

export { state };

import { writable, derived } from 'svelte/store';
import GameLogic from './GameLogic';

const gameLogic = new GameLogic();
const writableStore = writable(gameLogic.getFieldState(), () => {
    gameLogic.resetGame();
    return () => console.log("Adios, amigos")
});

const PlayingFieldStore = {
    subscribe: writableStore.subscribe,
    executeTurn: (fieldIndex) => {
        console.log(`Executing turn with field ${fieldIndex}`);
        gameLogic.executeTurn(fieldIndex);
        console.log('New fieldstate is', gameLogic.getFieldState())
        writableStore.set(gameLogic.getFieldState());
    },
    resetGame: () => {
        gameLogic.resetGame()
        writableStore.set(gameLogic.getFieldState());
    }
}

const CurrentPlayerStore = derived(PlayingFieldStore, $PlayingFieldStore => {
    return {
        currentPlayer: gameLogic.getCurrentPlayer(),
        winner: gameLogic.getWinner()
    }
});

export default { PlayingFieldStore, CurrentPlayerStore };

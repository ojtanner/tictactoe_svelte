import { writable } from 'svelte/store';
import GameLogic from './GameLogic';

const gameLogic = new GameLogic();
const writableStore = writable(gameLogic.getFieldState());

const GameLogicStore = {
    subscribe: writableStore.subscribe,
    executeTurn: (fieldIndex) => {
        console.log(`Executing turn with field ${fieldIndex}`);
        gameLogic.executeTurn(fieldIndex);
        console.log('New fieldstate is', gameLogic.getFieldState())
        writableStore.set(gameLogic.getFieldState());
    }
}

export default GameLogicStore;

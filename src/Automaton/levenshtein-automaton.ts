import { Automaton } from "./interfaces";

export class LevenshteinAutomaton implements Automaton {
  private word: string;
  private maxDistance: number;

  constructor(word: string, maxEdit: number) {
    this.word = word;
    this.maxDistance = maxEdit;
  }

  start(): State {
    return Array.from(Array(this.word.length + 1).keys());
  }

  step(state: State, char: string): State {
    const newState = [state[0] + 1];
    for(let i = 0; i < state.length - 1; i++) {
      const cost = Number(this.word[i] !== char);
      const newValue = Math.min(newState[i] + 1, state[i] + cost, state[i+1] + 1);
      newState.push(newValue);
    }
    return newState;
  }

  isMatch(state: State): boolean {
    return state[state.length - 1] <= this.maxDistance;
  }

  canMatch(state: State): boolean {
    return Math.min(...state) <= this.maxDistance;
  }
}

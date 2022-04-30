export interface Automaton {
  start: () => State;
  step: (state: State, char: string) => State;
  isMatch: (state: State) => boolean;
  canMatch: (state: State) => boolean;
}
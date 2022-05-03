import { Automaton } from "./automaton/interfaces";
import { LevenshteinAutomaton } from "./automaton/levenshtein-automaton";
import { Loader } from "./loaders/interface";
import { ListLoader } from "./loaders/list-loader";
import { ROOT_CHAR } from "./trie/constants";
import { Trie } from "./trie/trie";

export class Analyzer {
  private automaton: Nullable<Automaton>;
  private trie: Trie;

  constructor(private loaders: Loader[] = [new ListLoader()]) {
    this.trie = new Trie();
  }

  load(arg: any) {
    this.loaders
      .filter((loader) => loader.canResolve(arg))
      .map((loader) => loader.load(arg).map((word) => this.trie.insert(word)));
  }

  private canBeAMatch(word: string, state: State): boolean {
    for (const letter of word) {
      state = this.automaton!.step(state, letter);
      if (!this.automaton!.canMatch(state)) return false;
    }
    return true;
  }

  private tryWords(
    currentTerm: string,
    words: string[],
    state0: State,
    finalWords: string[]
  ): string[] {
    const nextWords = this.trie.getNextWords(currentTerm);
    const filteredWords = nextWords.filter((word) =>
      this.canBeAMatch(word, state0)
    );
    const newWords = [...words, ...filteredWords];
    if (!newWords.length) return finalWords;
    const newTerm = newWords.shift();
    if (!newTerm) throw new Error("No Words loaded for search");
    if (this.trie.search(newTerm)) finalWords.push(newTerm);
    return this.tryWords(newTerm, newWords, state0, finalWords);
  }

  private isAMatch(word: string, state: State) {
    for (const letter of word) {
      state = this.automaton!.step(state, letter);
    }
    return this.automaton!.isMatch(state);
  }

  search(term: string, maxDifferences: number) {
    this.automaton = new LevenshteinAutomaton(ROOT_CHAR + term, maxDifferences);
    const state0 = this.automaton?.start();
    const candidateWords = this.tryWords(ROOT_CHAR, [], state0, []);
    return candidateWords
      .filter((word) => this.isAMatch(word, state0))
      .map((elem) => elem.slice(1));
  }
}

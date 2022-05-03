import assert from "assert";
import { Automaton } from "./interfaces";
import { LevenshteinAutomaton } from "./levenshtein-automaton";

describe("LevenshteinAutomaton", () => {
  describe("canMatch Method", () => {
    const word = "bannana";

    it("should return true when the distance is 1 and a given word match 1 letter of 2", () => {
      const automaton: Automaton = new LevenshteinAutomaton(word, 1);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "w");
      const state2 = automaton.step(state1, "a");

      assert.ok(automaton.canMatch(state2));
    });

    it("should return false when the distance is 1 and a given word no match 2 letter", () => {
      const automaton: Automaton = new LevenshteinAutomaton(word, 1);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "w");
      const state2 = automaton.step(state1, "o");

      assert.equal(automaton.canMatch(state2), false);
    });

    it("should return false when the distance is 2 and a given word no match 3 letter", () => {
      const automaton: Automaton = new LevenshteinAutomaton(word, 2);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "w");
      const state2 = automaton.step(state1, "o");
      const state3 = automaton.step(state2, "r");

      assert.equal(automaton.canMatch(state3), false);
    });

    it("should return true when the distance is 2 and a given word match 1 letter of 3", () => {
      const automaton: Automaton = new LevenshteinAutomaton(word, 2);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "w");
      const state2 = automaton.step(state1, "o");
      const state3 = automaton.step(state2, "n");

      assert.ok(automaton.canMatch(state3));
    });
  });

  describe("isMatch Method", () => {
    it("should return true when all the letters match with a given word for any distance", () => {
      const automaton: Automaton = new LevenshteinAutomaton("key", 1);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "k");
      const state2 = automaton.step(state1, "e");
      const state3 = automaton.step(state2, "y");

      assert.ok(automaton.canMatch(state3));
    });

    it("should return false when more than one letter DOESN'T match with a given word and distance is 1", () => {
      const automaton: Automaton = new LevenshteinAutomaton("key", 1);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "k");
      const state2 = automaton.step(state1, "o");
      const state3 = automaton.step(state2, "r");

      assert.equal(automaton.canMatch(state3), false);
    });

    it("should return true when ONLY one letter DOESN'T match with a given word and distance is 1", () => {
      const automaton: Automaton = new LevenshteinAutomaton("key", 1);
      const state0 = automaton.start();

      const state1 = automaton.step(state0, "k");
      const state2 = automaton.step(state1, "e");
      const state3 = automaton.step(state2, "r");

      assert.ok(automaton.canMatch(state3));
    });
  });
});

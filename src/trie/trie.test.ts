import assert from "assert";
import { Trie } from "./trie";

describe("Trie", () => {
  it("should return true when searching for a word that was inserted before", () => {
    const trie = new Trie();
    const key = "KEY";
    trie.insert(key);

    assert.ok(trie.search(key));
  });

  it("should return false for a word that was NOT inserted before", () => {
    const trie = new Trie();
    const key = "KEY";
    const anotherKey = "NOT";
    trie.insert(key);

    assert.equal(trie.search(anotherKey), false);
  });

  it("should return false for a prefix of a word that was inserted before", () => {
    const trie = new Trie();
    const key = "KEY";
    const prefix = "KE";
    trie.insert(key);

    assert.equal(trie.search(prefix), false);
  });

  it("should return true for a word that was inserted before among other words", () => {
    const key = "KEY";
    const words = [key, "RANDOM", "BLA", "TEST", "NOT", "ETC", "KEYS"];
    const trie = new Trie();
    words.forEach((word) => trie.insert(word));

    assert.ok(trie.search(key));
  });

  it("should return false for a word that was deleted before", () => {
    const key = "KEY";
    const trie = new Trie();
    trie.insert(key);
    trie.remove(key);

    assert.equal(trie.search(key), false);
  });

  it("should return false for a word in a list that was deleted before", () => {
    const key = "KEY";
    const words = [key, "RANDOM", "BLA", "TEST", "NOT", "ETC", "KEYS"];
    const trie = new Trie();
    words.forEach((word) => trie.insert(word));
    trie.insert(key);
    trie.remove(key);

    assert.equal(trie.search(key), false);
  });

  it("should return an Array of all the words in the trie one letter ahead of the given key", () => {
    const key = "KEY";
    const words = [
      "RANDOM",
      "BLA",
      "TEST",
      "NOT",
      "ETC",
      "KEYS",
      "KEYA",
      "KEYO",
    ];
    const trie = new Trie();
    words.forEach((word) => trie.insert(word));

    assert.deepEqual(trie.getNextWords(key), ["KEYO", "KEYS", "KEYA"]);
  });
});

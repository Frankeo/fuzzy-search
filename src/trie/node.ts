import { ALPHABET_SIZE } from "./constants";
import { Node } from "./interface";

export class TrieNode implements Node {
  private children: Nullable<Node>[] = Array(ALPHABET_SIZE).fill(null);
  private character: string;
  private isEndWord: boolean;

  constructor(character: string) {
    this.character = character;
    this.isEndWord = false;
  }

  isEmpty() {
    return this.children.every((child) => !child);
  }

  updateChild(index: number, node: Nullable<Node>) {
    this.children[index] = node;
  }

  getChild(index: number) {
    return this.children[index];
  }

  markAsLeaf() {
    this.isEndWord = true;
  }

  unMarkAsLeaf() {
    this.isEndWord = false;
  }

  isEndOfWord() {
    return this.isEndWord;
  }
}

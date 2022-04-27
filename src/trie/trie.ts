import { ALPHABET_SIZE } from "./constants";
import { TrieNode } from "./node";
import { Node, TrieAPI } from './interface';

export class Trie implements TrieAPI {
  private root: Nullable<Node>;

  constructor() {
    this.root = new TrieNode('');
  }

  private getIndex(char: string) {
    return char.toLowerCase().charCodeAt(0) % ALPHABET_SIZE;
  }

  insert(key: string) {
    if(!key) return;

    const characters = key.split('');
    let currentNode = this.root;

    for(const char of characters) {
      const index = this.getIndex(char);

      if(!currentNode?.getChild(index)) {
        currentNode?.updateChild(index, new TrieNode(char));
      }

      currentNode = currentNode?.getChild(index);
    }

    currentNode?.markAsLeaf();
  }

  search(key: string): boolean {
    if(!key) return false;

    const characters = key.toLowerCase().split('');
    let currentNode = this.root;

    for(const char of characters) {
      const index = this.getIndex(char);

      if(!currentNode?.getChild(index)) return false;

      currentNode = currentNode?.getChild(index);
    }

    return !!currentNode && currentNode.isEndOfWord()
  }

  remove(key: string, depth: number = 0, currentNode: Nullable<Node> = this.root): Nullable<Node> {
    if(!key) return null;

    if(depth === key.length) {
      if(currentNode?.isEndOfWord()) currentNode.unMarkAsLeaf();
      if(currentNode?.isEmpty()) currentNode = null;
      return currentNode;
    }

    const index = this.getIndex(key[depth]);
    currentNode?.updateChild(index, this.remove(key, ++depth, currentNode.getChild(index)));

    if(currentNode?.isEmpty() && !currentNode.isEndOfWord()) currentNode = null;

    return currentNode;
  }
}

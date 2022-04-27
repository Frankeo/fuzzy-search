export interface Node {
  markAsLeaf: () => void;
  unMarkAsLeaf: () => void;
  getChild: (index: number) => Nullable<Node>;
  updateChild: (index: number, node: Nullable<Node>) => void;
  isEndOfWord: () => boolean;
  isEmpty: () => boolean;
}

export interface TrieAPI {
  insert: (key: string)=> void;
  search: (key: string)=> boolean;
  remove: (key: string, depth: number, currentNode: Nullable<Node>) => Nullable<Node>;
}

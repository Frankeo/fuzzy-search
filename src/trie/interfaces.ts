export interface Node {
  getValue: () => string;
  markAsLeaf: () => void;
  unMarkAsLeaf: () => void;
  getChild: (index: number) => Nullable<Node>;
  updateChild: (index: number, node: Nullable<Node>) => void;
  isEndOfWord: () => boolean;
  isEmpty: () => boolean;
  getChildValues: () => string[];
}

export interface TrieAPI {
  insert: (key: string) => void;
  search: (key: string) => boolean;
  getNextWords: (key: string) => string[];
  remove: (
    key: string,
    depth: number,
    currentNode: Nullable<Node>
  ) => Nullable<Node>;
}

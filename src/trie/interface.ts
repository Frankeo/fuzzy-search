export interface Node {
  markAsLeaf: () => void;
  unMarkAsLeaf: () => void;
  getChild: (index: number) => Nullable<Node>;
  updateChild: (index: number, node: Nullable<Node>) => void;
  isEndOfWord: () => boolean;
  isEmpty: () => boolean;
}
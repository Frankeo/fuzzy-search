import assert from 'assert';
import { TrieNode } from './node';

describe('Tree Node', () => {
  const node = new TrieNode('s');

  describe('IsEmpty Method', () => {
    it('should return true when the Node is created', () => {
      assert.ok(node.isEmpty());
    });

    it('should return false when the Node is created and a child is added', () => {
      node.updateChild(1, node);

      assert.equal(node.isEmpty(), false);
    });
  });

  describe('isEndOfWord Method', () => {
    it('should return false when the Node is created', () => {
      assert.equal(node.isEndOfWord(), false);
    });

    it('should return false when the method unMarkAsLeaf is executed on the Node', () => {
      node.unMarkAsLeaf();

      assert.equal(node.isEndOfWord(), false);
    });

    it('should return true when the method markAsLeaf is executed on the Node', () => {
      node.markAsLeaf();

      assert.ok(node.isEndOfWord());
    });
  });

  describe('updateChild Method', () => {
    it('should change a child Node given an index', () => {
      const nodeA = new TrieNode('a');
      node.updateChild(1, nodeA);
      node.updateChild(1, node);

      assert.notDeepStrictEqual(nodeA, node.getChild(1));
    });
  });

  describe('getChild Method', () => {
    it('should return the same child Node that was updated', () => {
      const nodeA = new TrieNode('a');
      node.updateChild(1, nodeA);

      assert.deepStrictEqual(nodeA, node.getChild(1));
    });
  });

  describe('getChildValues Method', () => {
    it('should return a letter array of every child letter', () => {
      const nodeA = new TrieNode('a');
      const nodeB = new TrieNode('b');
      const nodeC = new TrieNode('c');
      nodeA.updateChild(1, nodeB);
      nodeA.updateChild(2, nodeC);

      assert.deepStrictEqual(nodeA.getChildValues(), ["b", "c"]);
    });

    it('should return an empty array if has no child', () => {
      const nodeA = new TrieNode('a');
      assert.deepStrictEqual(nodeA.getChildValues(), []);
    });
  });
});

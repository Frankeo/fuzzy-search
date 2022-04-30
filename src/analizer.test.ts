import { Analizer } from "./analizer";
import assert from 'assert';

describe('Analizer', () => {
  describe('search Method', () => {
    it('should a list of all words with a distance 1 from KEY', () => {
      const term = "KEY";
      const matches = ["KE", "KEO", "KEA", "KEYS", "AKEY" ];
      const list = ["BLA", "TRUCO", "NOT", "TEST", ...matches];
      const analizer = new Analizer();
      analizer.load(list);

      assert.deepEqual(analizer.search(term, 1), matches);
    });

    it('should a list of all words with a distance 2 from KEY', () => {
      const term = "KEY";
      const matches = ["K", "AKE", "KEOS", "KEYS", "KEAS" ];
      const list = ["BLA", "TRUCO", "NOT", "TEST", ...matches];
      const analizer = new Analizer();
      analizer.load(list);

      assert.deepEqual(analizer.search(term, 2), matches);
    });
  });
});
import assert from "assert";
import { isString } from "./string";

describe("String utils", () => {
  describe("isString Method", () => {
    it('should return TRUE when sending "TEXT"', () => {
      const term = "TEXT";
      assert.ok(isString(term));
    });

    it("should return FALSE when sending 1", () => {
      const term = 1;
      assert.equal(isString(term), false);
    });
  });
});

import { equal } from "assert";
import { prueba } from "./main";

describe("Usando Mocha", () => {
  describe("#prueba()", () => {
    it("should return HOLA FRAN", () => {
      const result = prueba("FRAN");
      equal(result, "HOLA FRAN");
    });
  });
});

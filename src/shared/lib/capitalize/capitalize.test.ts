import { capitalize } from "./capitalize";

describe("capitalize", () => {
  test("capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("returns empty string for empty input", () => {
    expect(capitalize("")).toBe("");
  });

  test("does not change already capitalized string", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("capitalizes single character", () => {
    expect(capitalize("h")).toBe("H");
  });

  test("keeps remaining characters unchanged", () => {
    expect(capitalize("hELLO")).toBe("HELLO");
  });
});

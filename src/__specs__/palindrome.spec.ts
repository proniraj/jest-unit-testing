import palindrome from "../palindrome";

describe("palindrome", () => {
  it("should return true for 'eye'", () => {
    expect(palindrome("eye")).toBe(true);
  });

  it("should return true for '_eye'", () => {
    expect(palindrome("_eye")).toBe(true);
  });

  it("should return false for jest", () => {
    expect(palindrome("jest")).toBe(false);
  });
});

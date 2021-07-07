describe("value testing", () => {
  test("strings are string", () => {
    expect("Hello World").toBe("Hello World");
    expect(stringCheck("test")).toBeTruthy();
    expect(stringCheck("Coding is more fun than manual testing.")).toBeTruthy();
    expect(stringCheck(1010101010101010)).toBeFalsy();
  });
  test("numbers are numbers", () => {
    expect(3.14159).toBe(3.14159);
    expect(numberCheck(-555.333)).toBeTruthy();
    expect(numberCheck((3 * 5) / 13 + 1)).toBeTruthy();
    expect(numberCheck("12")).toBeFalsy();
  });
  test("booleans are booleans", () => {
    expect(false).toBe(false);
    expect(booleanCheck(true)).toBeTruthy();
    expect(booleanCheck(false)).toBeTruthy();
    expect(booleanCheck(5)).toBeFalsy();
  });
});

function numberCheck(x) {
  return typeof x == "number";
}
function stringCheck(x) {
  return typeof x == "string";
}
function booleanCheck(x) {
  return typeof x == "boolean";
}
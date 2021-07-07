describe("value testing", () => {
  test("strings are string", () => {
    expect("Hello World").toBe("Hello World");
    expect(stringCheck("test")).toBeTruthy();
    expect(stringCheck("Test 2")).toBeTruthy();
    expect(stringCheck(1000)).toBeFalsy();
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

// function numberCheck(x) {
//   return typeof x == "number";
// }
// function stringCheck(x) {
//   return typeof x == "string";
// }
// function booleanCheck(x) {
//   return typeof x == "boolean";
// }

describe("value testing", () => {
  test("strings are string", () => {
    let hello: string = "Hello World";
    let word: string = "test";
    let sentence: string = "Test 2";
    let notAString: number = 1000;

    expect(hello).toBe("Hello World");
    expect(stringCheck(word)).toBeTruthy();
    expect(stringCheck(sentence)).toBeTruthy();
    expect(stringCheck(notAString)).toBeFalsy();
  });
  test("numbers are numbers", () => {
    let pi : number = 3.14159;
    let decimal : number = -555.333;
    let equation : number = (3 * 5) / 13 + 1;
    let notANumber : string = '12';

    expect(pi).toBe(3.14159);
    expect(numberCheck(decimal)).toBeTruthy();
    expect(numberCheck(equation)).toBeTruthy();
    expect(numberCheck(notANumber)).toBeFalsy();
  });
  test("booleans are booleans", () => {
    let beFalse : boolean = false;
    let beTrue: boolean = true;
    let booleanFalse: boolean = 1 > 10;
    let notABoolean: number = 5;

    expect(beFalse).toBe(false);
    expect(booleanCheck(beTrue)).toBeTruthy();
    expect(booleanCheck(booleanFalse)).toBeTruthy();
    expect(booleanCheck(notABoolean)).toBeFalsy();
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
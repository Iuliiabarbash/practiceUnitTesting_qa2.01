describe("Testing the calculator", () => {
    test("Example test", () => {
      expect(calculator.add(2, 50)).toBe(52);
      expect(calculator.add(10, -5)).toBe(5);

    });
    test("Addition works", () => {
      expect(true).toBeTruthy(),
      expect(10 + 5 == 15).toBeTruthy(),
      expect(calculator.add(10, -5)).toBe(5),
      expect(calculator.add(3.14, 0.7)).toBe(3.84)
    });
    test("Subtraction works", () => {
      expect(true).toBeTruthy(),
      expect(calculator.subtract(9, 0.2)).toBe(8.8),
      expect(calculator.subtract(-30, -10)).toBe(-20),
      expect(5 - 3 == 2).toBeTruthy()
    });
    test("Multiplication works", () => {
      expect(true).toBeTruthy(),
      expect(2 * 3 == 6).toBeTruthy(),
      expect(calculator.multiply(100, 2)).toBe(200),
      expect(calculator.multiply(0.2, 0.3)).toBe(0.06),
      expect(calculator.multiply(2, 4)).toBe(8)
    });
    test("Division works", () => {
      expect(true).toBeTruthy();
      expect(calculator.divide(700, 700)).toBe(1),
      expect(calculator.divide(7, 3)).toBe(2.3333333333333335)
    });
    describe("Stretch Goals", () => {
      test("(2+2)/4 == 1", () => {
        expect(calculator.divide(calculator.add(2, 2), 4)).toBe(1);
        expect(calculator.divide(calculator.add(6, 4), calculator.subtract(7, 2))).toBe(2)
    });
      test("(28/4)*(6/2)*(30-27+(3-4)) == 42", () => {
        expect(true).toBeTruthy();
        expect(calculator.multiply(calculator.multiply(calculator.divide(28, 4), calculator.divide(6, 2)), calculator.add(calculator.subtract(30, 27), calculator.subtract(3, 4)))).toBe(42)

     });
  });
});
  
  const calculator = {
    /** Takes two numbers and adds them together.
     * @example
     * calculator.add(2, 3) == 5
     */

    add: (a: number, b: number): number => a + b,
    /** Takes two numbers and subtracts the second from the first.
     * @example
     * calculator.subtract(2, 3) == -1
     */


    subtract: (a: number, b: number): number => a - b,
    /** Takes two numbers and multiplies them together.
     * @example
     * calculator.multiply(2, 3) == 6
     */


    multiply: (a: number, b: number): number => a * b,
    /** Takes two numbers and divides the first by the second.
     * @example
     * calculator.divide(2, 3) == 0.5
     */

    divide: (a: number, b: number): number => a / b,
  };
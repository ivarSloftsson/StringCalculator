// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');

test("return with no input", () => {
	expect(StringCalculator()).toBe("0");
});

test("returns sum of 1 value", () => {
	expect(StringCalculator("1")).toBe("1");
});

test("returns sum of 2 values", () => {
	expect(StringCalculator("1,2")).toBe("3");
});

test("returns sum of 3 values", () => {
	expect(StringCalculator("1,2,3")).toBe("6");
});

test("returns sum of 4 values", () => {
	expect(StringCalculator("1,2,3,4")).toBe("10");
});

test("Add method handles new lines between numbers", () => {
	expect(StringCalculator("1\n2,3")).toBe("6");
});

test("Numbers bigger than 1000 should be ignored", () => {
	expect(StringCalculator("1001, 2")).toBe("2");
});

test("Add method can handle ; as a delimiter", () => {
	expect(StringCalculator("//;\n1;2")).toBe("3");
});

test("Add method can handle longer delimiters", () => {
	expect(StringCalculator("//ta\n1ta2,3")).toBe("6");
});
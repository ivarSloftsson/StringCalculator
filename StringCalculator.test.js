// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');

test("return with no input", () => {
	expect(StringCalculator()).toBe("0");
});

test("returns sum of 1 value", () => {
	expect(StringCalculator("1")).toBe("1");
});

test("returns sum of 2 values", () => {
	expect(StringCalculator("1","2")).toBe("3");
});

test("returns sum of 3 values", () => {
	expect(StringCalculator("1","2","3")).toBe("6");
});

test("returns sum of 4 values", () => {
	expect(StringCalculator("1","2","3","4")).toBe("10");
});
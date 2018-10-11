// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');

test("return with no input", () => {
	expect(StringCalculator()).toBe("0");
});

test("returns sum of 2 values", () => {
	expect(StringCalculator("1","2")).toBe("3");
});



// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');
test("returns sum of input", () => {
	expect(StringCalculator()).toBe("3");
});

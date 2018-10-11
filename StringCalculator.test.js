// StringCalculator.test.js
const StringCalculator = require('./StringCalculator');
test("returns sum of input", () => {
	expect(StringCalculator("1","2")).toBe("3");
});

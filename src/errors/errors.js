// errors.js
class TaxCalculatorError extends Error {
	constructor(message, code) {
		super(message);
		this.name = 'TaxCalculatorError';
		this.code = code;
	}
}

module.exports = {
	TaxCalculatorError
};

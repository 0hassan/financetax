// index.js
const pakistanTaxSlabs = require('./config/pakistanTaxSlabs');
const calculator = new TaxCalculator(pakistanTaxSlabs);

module.exports = {
	calculator,
	TaxCalculatorError,
	TAX_YEARS
};
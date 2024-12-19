// index.js
const pakistanTaxSlabs = require('./config/pakistanTaxSlabs');
const { validateInputs } = require('./utils/utils');
const { TaxCalculatorError } = require('./errors/errors');
const { TAX_YEARS } = require('./utils/constants');
const Pakistan = require('./countries/pakistan');

const calculator = new Pakistan(pakistanTaxSlabs);

module.exports = {
	calculator,
	TaxCalculatorError,
	TAX_YEARS,
	validateInputs
};
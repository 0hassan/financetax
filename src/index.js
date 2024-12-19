// index.js
const { Pakistan, pakistanTaxSlabs } = require('./pak');
const { validateInputs } = require('./utils/utils');
const { TaxCalculatorError } = require('./errors/errors');
const { TAX_YEARS } = require('./utils/constants');

const calculator = new Pakistan(pakistanTaxSlabs);

module.exports = {
	calculator,
	TaxCalculatorError,
	TAX_YEARS,
	validateInputs
};

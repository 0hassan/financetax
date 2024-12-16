const validateInputs = (income, year) => {
	if (!income && income !== 0) {
		throw new TaxCalculatorError(ERROR_MESSAGES.MISSING_INCOME, 'MISSING_INCOME');
	}

	if (!year) {
		throw new TaxCalculatorError(ERROR_MESSAGES.MISSING_YEAR, 'MISSING_YEAR');
	}

	if (typeof income !== 'number' || income < 0) {
		throw new TaxCalculatorError(ERROR_MESSAGES.INVALID_INCOME, 'INVALID_INCOME');
	}

	if (!Number.isInteger(year) || year < TAX_YEARS.MIN_YEAR || year > TAX_YEARS.MAX_YEAR) {
		throw new TaxCalculatorError(ERROR_MESSAGES.INVALID_YEAR, 'INVALID_YEAR');
	}
};


// constants.js
const TAX_YEARS = {
	MIN_YEAR: 2014,
	MAX_YEAR: 2024
};

const ERROR_MESSAGES = {
	INVALID_INCOME: 'Income must be a positive number',
	INVALID_YEAR: `Year must be between ${TAX_YEARS.MIN_YEAR} and ${TAX_YEARS.MAX_YEAR}`,
	MISSING_INCOME: 'Income is required',
	MISSING_YEAR: 'Year is required'
};

const { validateInputs } = require('../../src/utils/utils');
const { TaxCalculatorError } = require('../../src/errors/errors');
const { ERROR_MESSAGES } = require('../../src/utils/constants');

describe('validateInputs', () => {
	test('should throw error if income is missing', () => {
		expect(() => validateInputs(undefined, 2020)).toThrow(TaxCalculatorError);
		expect(() => validateInputs(undefined, 2020)).toThrow(ERROR_MESSAGES.MISSING_INCOME);
	});

	test('should throw error if year is missing', () => {
		expect(() => validateInputs(50000, undefined)).toThrow(TaxCalculatorError);
		expect(() => validateInputs(50000, undefined)).toThrow(ERROR_MESSAGES.MISSING_YEAR);
	});

	test('should throw error if income is not a number', () => {
		expect(() => validateInputs('50000', 2020)).toThrow(TaxCalculatorError);
		expect(() => validateInputs('50000', 2020)).toThrow(ERROR_MESSAGES.INVALID_INCOME);
	});

	test('should throw error if income is negative', () => {
		expect(() => validateInputs(-50000, 2020)).toThrow(TaxCalculatorError);
		expect(() => validateInputs(-50000, 2020)).toThrow(ERROR_MESSAGES.INVALID_INCOME);
	});

	test('should throw error if year is not an integer', () => {
		expect(() => validateInputs(50000, 2020.5)).toThrow(TaxCalculatorError);
		expect(() => validateInputs(50000, 2020.5)).toThrow(ERROR_MESSAGES.INVALID_YEAR);
	});

	test('should throw error if year is out of range', () => {
		expect(() => validateInputs(50000, 2013)).toThrow(TaxCalculatorError);
		expect(() => validateInputs(50000, 2013)).toThrow(ERROR_MESSAGES.INVALID_YEAR);
		expect(() => validateInputs(50000, 2025)).toThrow(TaxCalculatorError);
		expect(() => validateInputs(50000, 2025)).toThrow(ERROR_MESSAGES.INVALID_YEAR);
	});

	test('should not throw error for valid inputs', () => {
		expect(() => validateInputs(50000, 2020)).not.toThrow();
	});
});

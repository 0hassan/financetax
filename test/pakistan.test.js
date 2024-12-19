const { Pakistan, pakistanTaxSlabs } = require('../src/pak');
const { ERROR_MESSAGES } = require('../src/utils/constants');

describe('Pakistan', () => {
	let pakistan;

	beforeAll(() => {
		pakistan = new Pakistan(pakistanTaxSlabs);
	});

	test('should get tax slabs for a valid year', () => {
		const slabs = pakistan.getSlabsForYear(2020);
		expect(slabs).toBeDefined();
		expect(slabs.length).toBeGreaterThan(0);
	});

	test('should throw error for invalid year', () => {
		expect(() => pakistan.getSlabsForYear(2013)).toThrow(ERROR_MESSAGES.INVALID_YEAR);
	});

	test('should calculate tax for a given slab', () => {
		const slab = { min: 600001, max: 1200000, rate: 0.05 };
		const tax = pakistan.calculateTaxForSlab(800000, slab);
		expect(tax).toBe(10000);
	});

	test('should calculate annual tax for valid inputs', () => {
		const tax = pakistan.calculateAnnualTax(800000, 2020);
		expect(tax).toBeGreaterThan(0);
	});

	test('should throw error if unable to determine tax slab', () => {
		expect(() => pakistan.calculateAnnualTax(-100000000, 2020)).toThrow(ERROR_MESSAGES.INVALID_INCOME);
	});

	test('should calculate monthly tax for valid inputs', () => {
		const tax = pakistan.calculateMonthlyTax(80000, 2020);
		expect(tax).toBeGreaterThan(0);
	});

	test('should get tax summary for valid inputs', () => {
		const summary = pakistan.getTaxSummary(800000, 2020);
		expect(summary).toHaveProperty('annualIncome');
		expect(summary).toHaveProperty('annualTax');
		expect(summary).toHaveProperty('monthlyTax');
		expect(summary).toHaveProperty('effectiveRate');
		expect(summary).toHaveProperty('formattedAnnualTax');
		expect(summary).toHaveProperty('formattedMonthlyTax');
	});
});

const { validateInputs } = require('../utils/utils');
const { TaxCalculatorError } = require('../errors/errors');

/**
 * Formats the given amount as currency.
 * @param {number} amount - The amount to format.
 * @returns {string} The formatted currency string.
 */
const formatCurrency = (amount) => {
	return new Intl.NumberFormat('en-PK', {
		style: 'currency',
		currency: 'PKR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
};

/**
 * Class representing Pakistan's tax calculations.
 */
class Pakistan {
	constructor(taxSlabs) {
		this.taxSlabs = taxSlabs;
	}

	/**
	 * Gets the tax slabs for the given year.
	 * @param {number} year - The year to get the tax slabs for.
	 * @returns {Array} The tax slabs for the year.
	 * @throws {TaxCalculatorError} If no tax slabs are found for the year.
	 */
	getSlabsForYear(year) {
		validateInputs(0, year);
		const slabs = this.taxSlabs[year];
		if (!slabs) {
			throw new TaxCalculatorError(`No tax slabs found for year ${year}`, 'INVALID_YEAR');
		}
		return slabs;
	}

	/**
	 * Calculates the tax for a given income and slab.
	 * @param {number} income - The income to calculate tax for.
	 * @param {Object} slab - The tax slab to use for calculation.
	 * @returns {number} The calculated tax.
	 */
	calculateTaxForSlab(income, slab) {
		if (income <= slab.min) return 0;

		const taxableAmount = Math.min(income, slab.max) - slab.min;
		const variableTax = taxableAmount * slab.rate;
		const totalTax = (slab.fixedTax || 0) + variableTax;

		return totalTax;
	}

	/**
	 * Calculates the annual tax for a given income and year.
	 * @param {number} income - The income to calculate tax for.
	 * @param {number} year - The year to calculate tax for.
	 * @returns {number} The calculated annual tax.
	 * @throws {TaxCalculatorError} If unable to determine the tax slab.
	 */
	calculateAnnualTax(income, year) {
		validateInputs(income, year);
		const slabs = this.getSlabsForYear(year);

		// Find applicable slab
		const applicableSlab = slabs.find(slab =>
			income > slab.min && income <= slab.max
		);

		if (!applicableSlab) {
			throw new TaxCalculatorError('Unable to determine tax slab', 'CALCULATION_ERROR');
		}

		const tax = this.calculateTaxForSlab(income, applicableSlab);
		return Math.round(tax);
	}

	/**
	 * Calculates the monthly tax for a given income and year.
	 * @param {number} income - The monthly income to calculate tax for.
	 * @param {number} year - The year to calculate tax for.
	 * @returns {number} The calculated monthly tax.
	 */
	calculateMonthlyTax(income, year) {
		const annualTax = this.calculateAnnualTax(income * 12, year);
		return Math.round(annualTax / 12);
	}

	/**
	 * Gets a summary of the tax calculations for a given income and year.
	 * @param {number} income - The income to calculate tax for.
	 * @param {number} year - The year to calculate tax for.
	 * @returns {Object} The tax summary.
	 */
	getTaxSummary(income, year) {
		const annualTax = this.calculateAnnualTax(income, year);
		const monthlyTax = Math.round(annualTax / 12);
		const effectiveRate = (annualTax / income) * 100;

		return {
			annualIncome: income,
			annualTax,
			monthlyTax,
			effectiveRate: Number(effectiveRate.toFixed(2)),
			formattedAnnualTax: formatCurrency(annualTax),
			formattedMonthlyTax: formatCurrency(monthlyTax)
		};
	}
}

module.exports = Pakistan;

const formatCurrency = (amount) => {
	return new Intl.NumberFormat('en-PK', {
		style: 'currency',
		currency: 'PKR',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
};

class Pakistan {
	constructor(taxSlabs) {
		this.taxSlabs = taxSlabs;
	}

	getSlabsForYear(year) {
		validateInputs(0, year);
		const slabs = this.taxSlabs[year];
		if (!slabs) {
			throw new TaxCalculatorError(`No tax slabs found for year ${year}`, 'INVALID_YEAR');
		}
		return slabs;
	}

	calculateTaxForSlab(income, slab) {
		if (income <= slab.min) return 0;

		const taxableAmount = Math.min(income, slab.max) - slab.min;
		const variableTax = taxableAmount * slab.rate;
		const totalTax = (slab.fixedTax || 0) + variableTax;

		return totalTax;
	}

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

	calculateMonthlyTax(income, year) {
		const annualTax = this.calculateAnnualTax(income * 12, year);
		return Math.round(annualTax / 12);
	}

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

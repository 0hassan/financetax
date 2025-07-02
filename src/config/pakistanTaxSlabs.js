const pakistanTaxSlabs = {
	2025: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.01 },
		{ min: 1200001, max: 2200000, rate: 0.11, fixedTax: 6000 },
		{ min: 2200001, max: 3200000, rate: 0.23, fixedTax: 116000 },
		{ min: 3200001, max: 4100000, rate: 0.30, fixedTax: 346000 },
		{ min: 4100001, max: Infinity, rate: 0.35, fixedTax: 616000 }
	],
	2024: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.05 },
		{ min: 1200001, max: 2200000, rate: 0.15, fixedTax: 30000 },
		{ min: 2200001, max: 3200000, rate: 0.25, fixedTax: 180000 },
		{ min: 3200001, max: 4100000, rate: 0.30, fixedTax: 430000 },
		{ min: 4100001, max: Infinity, rate: 0.35, fixedTax: 700000 }
	],
	2023: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.025 },
		{ min: 1200001, max: 2400000, rate: 0.125, fixedTax: 15000 },
		{ min: 2400001, max: 3600000, rate: 0.225, fixedTax: 165000 },
		{ min: 3600001, max: 6000000, rate: 0.275, fixedTax: 435000 },
		{ min: 6000001, max: Infinity, rate: 0.35, fixedTax: 1095000 }
	],
	2022: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.025 },
		{ min: 1200001, max: 2400000, rate: 0.125, fixedTax: 15000 },
		{ min: 2400001, max: 3600000, rate: 0.20, fixedTax: 165000 },
		{ min: 3600001, max: 6000000, rate: 0.25, fixedTax: 405000 },
		{ min: 6000001, max: 12000000, rate: 0.325, fixedTax: 1005000 },
		{ min: 12000001, max: Infinity, rate: 0.35, fixedTax: 2955000 }
	],
	2021: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.05 },
		{ min: 1200001, max: 1800000, rate: 0.10, fixedTax: 30000 },
		{ min: 1800001, max: 2500000, rate: 0.15, fixedTax: 90000 },
		{ min: 2500001, max: 3500000, rate: 0.175, fixedTax: 195000 },
		{ min: 3500001, max: 5000000, rate: 0.20, fixedTax: 370000 },
		{ min: 5000001, max: 8000000, rate: 0.225, fixedTax: 670000 },
		{ min: 8000001, max: 12000000, rate: 0.25, fixedTax: 1345000 },
		{ min: 12000001, max: 30000000, rate: 0.275, fixedTax: 2345000 },
		{ min: 30000001, max: 50000000, rate: 0.30, fixedTax: 7295000 },
		{ min: 50000001, max: 75000000, rate: 0.325, fixedTax: 13295000 },
		{ min: 75000001, max: Infinity, rate: 0.35, fixedTax: 21420000 }
	],
	2020: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.05 },
		{ min: 1200001, max: 1800000, rate: 0.10, fixedTax: 30000 },
		{ min: 1800001, max: 2500000, rate: 0.15, fixedTax: 90000 },
		{ min: 2500001, max: 3500000, rate: 0.175, fixedTax: 195000 },
		{ min: 3500001, max: 5000000, rate: 0.20, fixedTax: 370000 },
		{ min: 5000001, max: 8000000, rate: 0.225, fixedTax: 670000 },
		{ min: 8000001, max: 12000000, rate: 0.25, fixedTax: 1345000 },
		{ min: 12000001, max: 30000000, rate: 0.275, fixedTax: 2345000 },
		{ min: 30000001, max: 50000000, rate: 0.30, fixedTax: 7295000 },
		{ min: 50000001, max: 75000000, rate: 0.325, fixedTax: 13295000 },
		{ min: 75000001, max: Infinity, rate: 0.35, fixedTax: 21420000 }
	],
	2019: [
		{ min: 0, max: 600000, rate: 0 },
		{ min: 600001, max: 1200000, rate: 0.05 },
		{ min: 1200001, max: 1800000, rate: 0.10, fixedTax: 30000 },
		{ min: 1800001, max: 2500000, rate: 0.15, fixedTax: 90000 },
		{ min: 2500001, max: 3500000, rate: 0.175, fixedTax: 195000 },
		{ min: 3500001, max: 5000000, rate: 0.20, fixedTax: 370000 },
		{ min: 5000001, max: 8000000, rate: 0.225, fixedTax: 670000 },
		{ min: 8000001, max: 12000000, rate: 0.25, fixedTax: 1345000 },
		{ min: 12000001, max: 30000000, rate: 0.275, fixedTax: 2345000 },
		{ min: 30000001, max: 50000000, rate: 0.30, fixedTax: 7295000 },
		{ min: 50000001, max: 75000000, rate: 0.325, fixedTax: 13295000 },
		{ min: 75000001, max: Infinity, rate: 0.35, fixedTax: 21420000 }
	],
	2018: [
		{ min: 0, max: 400000, rate: 0 },
		{ min: 400001, max: 800000, fixedTax: 1000, rate: 0 },
		{ min: 800001, max: 1200000, fixedTax: 2000, rate: 0 },
		{ min: 1200001, max: 2500000, rate: 0.05, fixedTax: 2000 },
		{ min: 2500001, max: 4000000, rate: 0.15, fixedTax: 65000 },
		{ min: 4000001, max: 8000000, rate: 0.20, fixedTax: 290000 },
		{ min: 8000001, max: Infinity, rate: 0.25, fixedTax: 1090000 }
	],
	2017: [
		{ min: 0, max: 400000, rate: 0 },
		{ min: 400001, max: 500000, rate: 0.02 },
		{ min: 500001, max: 750000, rate: 0.05, fixedTax: 2000 },
		{ min: 750001, max: 1400000, rate: 0.10, fixedTax: 14500 },
		{ min: 1400001, max: 1500000, rate: 0.125, fixedTax: 79500 },
		{ min: 1500001, max: 1800000, rate: 0.15, fixedTax: 92000 },
		{ min: 1800001, max: 2500000, rate: 0.175, fixedTax: 137000 },
		{ min: 2500001, max: 3000000, rate: 0.20, fixedTax: 259500 },
		{ min: 3000001, max: 3500000, rate: 0.225, fixedTax: 359500 },
		{ min: 3500001, max: 4000000, rate: 0.25, fixedTax: 472000 },
		{ min: 4000001, max: 7000000, rate: 0.275, fixedTax: 597000 },
		{ min: 7000001, max: Infinity, rate: 0.30, fixedTax: 1422000 }
	],
	2016: [
		{ min: 0, max: 400000, rate: 0 },
		{ min: 400001, max: 500000, rate: 0.02 },
		{ min: 500001, max: 750000, rate: 0.05, fixedTax: 2000 },
		{ min: 750001, max: 1400000, rate: 0.10, fixedTax: 14500 },
		{ min: 1400001, max: 1500000, rate: 0.125, fixedTax: 79500 },
		{ min: 1500001, max: 1800000, rate: 0.15, fixedTax: 92000 },
		{ min: 1800001, max: 2500000, rate: 0.175, fixedTax: 137000 },
		{ min: 2500001, max: 3000000, rate: 0.20, fixedTax: 259500 },
		{ min: 3000001, max: 3500000, rate: 0.225, fixedTax: 359500 },
		{ min: 3500001, max: 4000000, rate: 0.25, fixedTax: 472000 },
		{ min: 4000001, max: 7000000, rate: 0.275, fixedTax: 597000 },
		{ min: 7000001, max: Infinity, rate: 0.30, fixedTax: 1422000 }
	],
	2015: [
		{ min: 0, max: 400000, rate: 0 },
		{ min: 400001, max: 500000, rate: 0.02 },
		{ min: 500001, max: 750000, rate: 0.05, fixedTax: 2000 },
		{ min: 750001, max: 1400000, rate: 0.10, fixedTax: 14500 },
		{ min: 1400001, max: 1500000, rate: 0.125, fixedTax: 79500 },
		{ min: 1500001, max: 1800000, rate: 0.15, fixedTax: 92000 },
		{ min: 1800001, max: 2500000, rate: 0.175, fixedTax: 137000 },
		{ min: 2500001, max: 3000000, rate: 0.20, fixedTax: 259500 },
		{ min: 3000001, max: 3500000, rate: 0.225, fixedTax: 359500 },
		{ min: 3500001, max: 4000000, rate: 0.25, fixedTax: 472000 },
		{ min: 4000001, max: 7000000, rate: 0.275, fixedTax: 597000 },
		{ min: 7000001, max: Infinity, rate: 0.30, fixedTax: 1422000 }
	],
	2014: [
		{ min: 0, max: 400000, rate: 0 },
		{ min: 400001, max: 750000, rate: 0.05 },
		{ min: 750001, max: 1400000, rate: 0.10, fixedTax: 17500 },
		{ min: 1400001, max: 1500000, rate: 0.125, fixedTax: 82500 },
		{ min: 1500001, max: 1800000, rate: 0.15, fixedTax: 95000 },
		{ min: 1800001, max: 2500000, rate: 0.175, fixedTax: 140000 },
		{ min: 2500001, max: 3000000, rate: 0.20, fixedTax: 262500 },
		{ min: 3000001, max: 3500000, rate: 0.225, fixedTax: 362500 },
		{ min: 3500001, max: 4000000, rate: 0.25, fixedTax: 475000 },
		{ min: 4000001, max: 7000000, rate: 0.275, fixedTax: 600000 },
		{ min: 7000001, max: Infinity, rate: 0.30, fixedTax: 1425000 }
	]
};

module.exports = pakistanTaxSlabs;

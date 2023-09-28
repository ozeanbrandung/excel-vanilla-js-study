module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
	plugins: [
		'stylelint-order',
		//TODO: почему-то не работает fix?
		//'stylelint-config-rational-order/plugin'
	],
	rules: {
		'selector-class-pattern': null,
		'order/properties-order': [[], { severity: 'error' }],
		'unit-no-unknown': [
			true,
			{
				ignoreUnits: ['dvh'],
			},
		],
		// 'plugin/rational-order': [
		// 	true,
		// 	{
		// 		'border-in-box-model': false,
		// 		'empty-line-between-groups': true,
		// 	},
		// ],
	},
};

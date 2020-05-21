module.exports = {
	pagePerSection: true,
	sections: [
		{
			name: 'Forms',
			sections: [
				
				{
					name: 'Formik',
					components: 'src/components/form/formik/[A-Z]*/**/index.js'
				}
			]
		},
	
		
		{
			name: 'Generic',
			components: 'src/components/generic/[A-Z]*/index.js'
		}
	]
};

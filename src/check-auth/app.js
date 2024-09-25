const LEVELS = [
	{
		text: 'Admin Only',
		value: 'admin',
	},
	{
		text: 'User or Admin',
		value: 'user',
	},
	{
		text: 'Public Access (no-op)',
		value: 'noop',
	},
];

export default {
	id: 'flows-check-auth',
	name: 'Check Authentication',
	icon: 'lock',
	description: 'Checks whether a flow is triggered with authentication',
	overview: ({ level }) => {
		const level_str = level || 'user';
		const level_obj = LEVELS.find(({ value }) => value === level_str) || { text: 'Error' };
		return [
			{
				label: 'Required',
				text: level_obj.text,
			},
		];
	},
	options: [
		{
			field: 'level',
			name: 'Authentication Required',
			type: 'string',
			schema: {
				default_value: 'user',
			},
			meta: {
				field: 'level',
				special: null,
				interface: 'select-dropdown',
				options: {
					choices: LEVELS,
				},
				width: 'full',
			},
		},
	],
};

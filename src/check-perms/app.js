export default {
	id: 'flows-check-perms',
	name: 'Check Permissions',
	icon: 'lock',
	description: 'Checks whether a flow is triggered using a collections read permissions',
	overview: ({ collection }) => [
		{
			label: '$t:collection',
			text: collection,
		},
	],
	options: [
		{
			field: 'collection',
			type: 'string',
			name: '$t:collection',
			meta: {
				interface: 'system-collection',
				options: {
					includeSystem: true,
				},
				width: 'full',
				required: true,
			},
		},
	],
};

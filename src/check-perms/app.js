export default {
	id: 'flows-check-perms',
	name: 'Check Permissions',
	icon: 'lock',
	description: 'Checks whether a flow is triggered using a collections read permissions',
	overview: ({ collection }) => [
		{
			label: 'Collection',
			text: collection,
		},
	],
	options: [
		{
			field: 'collection',
			name: 'Collection',
			type: 'string',
			meta: {
				width: 'full',
				interface: 'collection-item-dropdown',
				options: {
				},
				width: 'full',
			},
		},
	],
};

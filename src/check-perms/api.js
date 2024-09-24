export default {
	id: 'flows-check-perms',
	handler: async ({ collection }, { services, database, getSchema, accountability }) => {
		const { ItemsService } = services;
		const schema = await getSchema(accountability);
		const service = new ItemsService(collection, { knex: database, schema, accountability });
		try {
			await service.readByQuery({ limit: 1 });
		} catch {
			throw new Error('Unauthenticated.');
		}
		return true;
	},
};

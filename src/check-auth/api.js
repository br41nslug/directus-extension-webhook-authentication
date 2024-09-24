export default {
	id: 'flows-check-auth',
	handler: ({ level }, { accountability }) => {
		if (level === 'admin' && (!accountability || !accountability.user || !accountability.admin)) {
			throw new Error('Unauthenticated.');
		}
		if (level === 'user' && (!accountability || !accountability.user)) {
			throw new Error('Unauthenticated.');
		}
		// no-op
		return true;
	},
};

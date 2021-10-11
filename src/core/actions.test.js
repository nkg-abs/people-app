import context from '../core/context';
describe('actions', () => {
	test('patchState sets state', () => {
		const key = Symbol('key');
		const mockContext = { data: { key }};
		const { patchState } = context.actions;
		const result = patchState(mockContext);

		expect(result).toEqual({ key });
	});
});

export const getters = {
	// отсортированные товары
	cartProducts: ({ items }) => items,
	sortType: ({sortBy}) => sortBy
}
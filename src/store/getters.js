export const getters = {
	// отсортированные товары
	cartProducts: ({ items }) => items,
	sortType: ({sortBy}) => sortBy,
	cartSize: ({ items: { length } }) => length 
}
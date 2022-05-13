export const getters = {
	cartProducts: ({ items }) => items,
	sortType: ({sortBy}) => sortBy,
	cartSize: ({ items: { length } }) => length 
};
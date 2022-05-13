import _ from "lodash"

export const mutations = {
	changeProductsOrder(state){
		const shuffledItems = _.shuffle(state.items);
		switch (state.sortBy) {
			case "name":
				state.items = shuffledItems.sort((a, b) => a.name.localeCompare(b.name));
				break;
			case "asc":
				state.items = shuffledItems.sort((a, b) => a.price - b.price);
				break;
			case "desc":
				state.items = shuffledItems.sort((a, b) => b.price - a.price);
				break
			case "shuffle":
				state.items = shuffledItems;
			default:
				return;
		}
	},
	setLocalStorageState(state, payload){
		Object.assign(state, payload);
	},
	pushProductToCart(state, payload){
		state.items.push({
			...payload,
		});
	},
	changeSortBy(state, payload){
		state.sortBy = payload;
	},
	deleteProductItem(state,payload){
		state.items.splice(payload, 1);
	}
}
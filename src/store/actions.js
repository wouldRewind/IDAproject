export const actions = {
	addProductToCart({ commit }, good) {
		commit("pushProductToCart", good)
	},
	changeSortOrder({ commit }, newSortBy) {
		commit("changeSortBy", newSortBy)
	},
	deleteProduct({ commit }, id) {
		commit("deleteProductItem", id)
	},
	sortProducts({ commit }) {
		commit("changeProductsOrder")
	},
	setLocalStorageState({ commit }, products) {
		if (localStorage && localStorage.products)
			commit("setLocalStorageState", products)
	}
}
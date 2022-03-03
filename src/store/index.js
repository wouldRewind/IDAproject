import  { createStore } from "vuex";
import { initialState } from "./initialState";
// Корзина товаров

// getters
const getters = {
	// отсортированные товары
	cartProducts: ({ items }) => items,
	sortType: ({sortBy}) => sortBy
	
}
// actions
const actions = {
	addProductToCart({ commit }, good){
		commit("pushProductToCart",good)
	},
	changeSortOrder({ commit },newSortBy){
		commit("changeSortBy",newSortBy)
	},
	deleteProduct({ commit }, id){
		commit("deleteProductItem",id)
	},
	sortProducts({ commit }){
		commit("changeProductsOrder")
	}
}
// mutations
const mutations = {
	changeProductsOrder(state){
		switch (state.sortBy) {
			case "name":
				state.items = state.items.sort((a,b) => a.name.localeCompare(b.name))
				break
			case "asc":
				state.items = state.items.sort((a,b) => a.price - b.price )
				break
			case "desc":
				state.items = state.items.sort((a,b) => b.price - a.price )
				break
			default:
				return
		}
	},
	pushProductToCart(state, good){
		state.items.push({
			...good
		})
	},
	changeSortBy(state,newSortBy){
		state.sortBy = newSortBy
	},
	deleteProductItem(state,id){
		// delete state.items[id]
		state.items.splice(id,1)
	}
}



export default createStore({
		state: {
			items: [...initialState],
			sortBy: "name" // asc,desc(price)
		},
		actions,
		mutations,
		getters
	
})

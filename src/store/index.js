import  { createStore } from "vuex";
import { initialState } from "./initialState";
// Корзина товаров

// getters
const getters = {
	// отсортированные товары
	cartProducts: ({ items,sortBy }) => {
		switch (sortBy) {
			case "name":
				return items.sort((a,b) => a.name.localeCompare(b.name))
			case "asc":
				return items.sort((a,b) => a.price - b.price )
			case "desc":
				return items.sort((a,b) => b.price - a.price )
			default:
				return items
		}
	}
	
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
}
// mutations
const mutations = {
	pushProductToCart(state, good){
		state.items.push({
			...state,
			...good
		})
	},
	changeSortBy(state,newSortBy){
		state.sortBy = newSortBy
	},
	deleteProductItem(state,id){
		// delete state.items[id]
		console.log(state.items, id)
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

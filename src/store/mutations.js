export const mutations = {
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
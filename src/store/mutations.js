import _ from "lodash"

export const mutations = {
	changeProductsOrder(state){
		const shuffledItems = _.shuffle(state.items) // for animation
		switch (state.sortBy) {
			case "name":
				state.items = shuffledItems.sort((a,b) => a.name.localeCompare(b.name))
				break
			case "asc":
				state.items = shuffledItems.sort((a,b) => a.price - b.price )
				break
			case "desc":
				state.items = shuffledItems.sort((a,b) => b.price - a.price)
				break
			case "shuffle":
				state.items = shuffledItems
			default:
				return
		}
	},
	setLocalStorageState(state, products){
		console.log("МУТИРУЕМ СТЕЙТ!")
		// if(products.items.length)
			Object.assign(state, products)
		
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
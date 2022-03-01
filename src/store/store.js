import actions from "./actions"
import getters from "./getters"
import mutations from "./mutations"

import Vue from "vue"
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cart: [
			{
				name: '',
				descr: '',
				imgLink: '',
				price: ''
			}
		] // корзина товаров 
	},
	actions,
	getters,
	mutations
	
})

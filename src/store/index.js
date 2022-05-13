import { createStore } from "vuex";
import { actions } from "./actions";
import { getters } from "./getters";
import { initialState } from "./initialState";
import { mutations } from "./mutations";


export default createStore({
	state: {
		items: [...initialState],
		sortBy: "name" // shuffle |name | asc | desc
	},
	actions,
	mutations,
	getters,
})

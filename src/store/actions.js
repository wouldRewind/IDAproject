const actionOne = (context,payload) =>{
	// ...
	context.commit("PROP1_UPDATED",payload)
}
const actionTwo = (context,payload) =>{
	// ...
	context.commit("PROP2_UPDATED",payload)
}

export default {
	actionOne,
	actionTwo
}

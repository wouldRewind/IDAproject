<template>
	<transition name="fade" >
		<button @click="showConfirm" v-if="showDelete" class="delete" type="button">
			<img src="../../assets/trash.svg" alt="Delete">
		</button>
	</transition>
</template>

<script>
import { useStore } from 'vuex'
export default {
	setup(props){
		console.log(props.showConfirm)
		const store = useStore()
		const deleteGood = index => {
			store.dispatch("deleteProduct",index)
		}

		return {
			deleteGood
		}

	},
	name: "GoodDelete",
	props: ['indexDelete','showDelete','showConfirm']
}
</script>

<style lang="scss" scoped>
	@import "../../scss/_const.scss";

	.delete{
		// Стилизую кнопку удаления товара
		cursor: pointer;
		background: $errorColor;
		transition: $transition;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 0.5rem 9.5px;
		border: 0;
		// Размещаю кнопку удаления товара
		position: absolute;
		top: -.5rem;
		right: -.5rem;
		// Hover-эффект кнопки
		&:hover{
			background: darken($errorColor,10);
		}
	}
	.fade-enter-active, .fade-leave-active {
transition: opacity $transition;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
opacity: 0;
	}
</style>
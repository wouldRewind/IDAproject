<template>
	<transition name="fade" >
		<button @click="deleteGood(indexDelete)" v-if="showDelete" class="delete" type="button">
			<img src="../assets/trash.svg" alt="Delete">
		</button>
	</transition>
</template>

<script>
import { watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
	setup(){
		const store = useStore()
		const deleteGood = index => store.dispatch("deleteProduct",index)

		// watch(() => store.getters.cartProducts.length,
		// (cur,old) => console.log("Удалил"))

		return {
			deleteGood
		}

	},
	name: "GoodDelete",
	props: ['indexDelete','showDelete']
}
</script>

<style lang="scss" scoped>
	@import "../scss/_const.scss";

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
		top: -1rem;
		right: -1rem;
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
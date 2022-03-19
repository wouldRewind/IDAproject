<template>
	<transition-group :key="cartSize"  tag="ul" name="list" class="grid">
		<GoodBlock v-for="(product,index) in products" :key="product.imgLink" 
		:mobileMenuIsActive="mobileMenuIsActive"
		:goodIndex="index"
		:goodName='product.name'
		:goodImgLink="product.imgLink"
		:goodDescr="product.descr"
		:goodPrice="splitPrice(product.price)"
		/>
	</transition-group>
</template>

<script>
import { computed, watch } from 'vue'

import { useStore } from 'vuex'
import GoodBlock from "./GoodBlock.vue"

export default {
	props: ['mobileMenuIsActive'],
	setup(){
		const store = useStore()
		const products = computed(() => store.getters.cartProducts)
		watch(() => store.getters.cartSize,
			(amount,prevAmount) => {
				console.log(prevAmount,amount)
			})
		const cartSize = computed(() => {
			// console.log("Количество товаров в корзине изменилось!")
			return store.getters.cartSize
		})


		const splitPrice = price => String(price).split( /(?=(?:...)*$)/ ).join(" ")

		// Сортирую, если изменился sortBy
		watch(
			() => store.getters.sortType,
			() => store.dispatch("sortProducts")
			)
		return {
			products,
			splitPrice,
			cartSize
			}
	},
	name: "GoodGrid",
	components: {
		GoodBlock
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/_const.scss";
	.grid{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		grid-template-rows: auto;
		grid-gap: 1rem;
	}
	@media screen and (max-width: 1100px){
			.grid {
				margin: 0 auto;
				grid-template-columns: repeat(2,1fr);
			}
		}
	@media screen and (max-width: 860px){
			.grid {
				margin-right: 0;
				grid-template-columns: repeat(1,1fr);
			}
		}
	@media screen and (max-width: $mobileMenuAppear){
			.grid {
				margin: 0 auto;
				grid-template-columns: repeat(2,1fr);
			}
		}
	@media screen and (max-width: 530px){
			.grid {
				grid-template-columns: repeat(1,1fr);
				grid-gap: 1rem / 0;
				margin-right: 0;
				& .good{
					max-width: 100%;
				}
			}
		}
.list-move{
	transition: transform 1s;
}
</style>
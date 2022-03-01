<template>
	<div class="grid">
		<GoodBlock v-for="(product,index) in products" :key="product.imgLink" 
		:goodIndex="index"
		:goodName='product.name'
		:goodImgLink="product.imgLink"
		:goodDescr="product.descr"
		:goodPrice="splitPrice(product.price)"
		/>
	</div>
</template>

<script>
import { computed, onUpdated, watch } from 'vue'

import { useStore } from 'vuex'
import GoodBlock from "./GoodBlock.vue"

export default {
	setup(){

		const store = useStore()
		const products = computed(() => store.getters.cartProducts)
		
		const splitPrice = price => String(price).split( /(?=(?:...)*$)/ ).join(" ")

		watch(
			() => store.getters.cartProducts.length,
			(cur,old) => console.log(cur,old,products.value)
		)

		return {products,splitPrice}
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
				// display: none;
				margin: 0 auto;
				grid-template-columns: repeat(2,1fr);
			}
		}
	@media screen and (max-width: 860px){
			.grid {
				// display: none;
				// margin-left: auto;
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
	@media screen and (max-width: 650px){
			.grid {
				grid-template-columns: repeat(1,1fr);
				grid-gap: 1rem / 0;
				margin-right: 0;
				& .good{
					max-width: 100%;
					// margin: 0 auto;
				}
			}
		}
</style>
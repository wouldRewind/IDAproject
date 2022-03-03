<template>
	<div @mouseenter="showDelete = !showDelete" @mouseleave="showDelete = !showDelete" class="good">

		<!-- Товар с картинкой и описанием -->
		<div class="good__img">
			<!-- <img v-show="!imgIsLoaded" src="../assets/spin.gif" alt=""> -->
			<img :src="this.goodImgLink"
			@load="load"
			
			loading="lazy" alt="Изображение товара">
		</div>
		<div class="good__info">
			<h3 class="good__title">{{ this.goodName }}</h3>
			<p class="good__descr">{{this.goodDescr}}</p>
			<p class="good__price">{{ this.goodPrice }} руб.</p>
		</div>
		<!-- Кнопка удаления -->
			<GoodDelete
			:indexDelete="goodIndex" 
			:showDelete="showDelete"/>
	</div>
</template>



<script>
import { reactive, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import GoodDelete from "./GoodDelete.vue"

export default {
	
	name: "GoodBlock",
	components: {
		GoodDelete
	},
	data() {
		return {
			showDelete: false,
			imgIsLoaded: false
		}
	},
	props: ['goodName','goodImgLink','goodDescr','goodPrice','goodIndex'],
	methods: {
		load(){
			this.imgIsLoaded = true
		}
	},
	mounted(){
	}
	
}
</script>

<style scoped lang="scss">
	@keyframes appear {
		0% {
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
	@import "../scss/_const.scss";
	.good{
		box-sizing: border-box;
		cursor: pointer;
		background-color: #FFFEFB;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		color: #3F3F3F;
		max-width: 332px;
		padding-bottom: 1.5em;
		position: relative;
		animation-name: appear;
		animation-duration: 1s;
		// transition: $transition;
		&__info{
			padding: 0 1rem;
		}
		&__img{
			height: 200px;
			margin-bottom: 1em;
			& > img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		&__title{
			font-size: 1.25rem;
			font-weight: 600;
			margin-bottom: 1em;
		}
		&__price{
			font-size: 1.5rem;
			font-weight: 600;
		}
		&__descr{
			font-size: 1rem;
			font-weight: 400;
			margin-bottom: 2em;
			max-width: 300px;
		}
	}
</style>
<template>
	<div @mouseenter="onHoverBlock" @mouseleave="onHoverBlock" class="good">

		<!-- Товар с картинкой и описанием -->
		<div class="good__img">
			<!-- <img v-show="!imgIsLoaded" src="../assets/spin.gif" alt=""> -->
			<img :src="goodImgLink"
			@load="load"
			
			loading="lazy" alt="Изображение товара">
		</div>
		<div class="good__info">
			<h3 class="good__title">{{ goodName }}</h3>
			<p class="good__descr">{{ goodDescr }}</p>
			<p class="good__price">{{ goodPrice }} руб.</p>
		</div>
		<!-- Кнопка удаления -->
			<GoodDelete
			:toogleConfirm="toogleComfirmMenu()"
			:indexDelete="goodIndex" 
			:showDelete="(isMobileMode && !confirmDeleteIsActive) || showDelete"/>
			<GoodDeleteConfirm
			:deleteIndex="goodIndex"
			:closeConfirmMenu="toogleComfirmMenu(false,true)"
			:confirmMenuIsVisible="confirmDeleteIsActive"
			/>
			<Fade
			:hideFade="hideConfirmMenu()"
			:fadeIsVisible="confirmDeleteIsActive"/>
	</div>
</template>



<script>
import GoodDelete from "./GoodDelete/GoodDelete.vue"
import GoodDeleteConfirm from "./GoodDelete/GoodDeleteConfirm.vue"
import Fade from "../components/Fade.vue"
export default {
	
	name: "GoodBlock",
	components: {
		GoodDelete,
		GoodDeleteConfirm,
		Fade
	},
	data() {
		return {
			showDelete: false,
			imgIsLoaded: false,
			confirmDeleteIsActive: false // visible or not
		}
	},
	computed: {
		isMobileMode(){
			return window.innerWidth <=680 ? true: false
		}
	},
	props: {
		goodName: {},
		goodDescr: {},
		goodPrice: {},
		goodIndex: {},
		goodImgLink: {
			type: String,
			default: null
		},
	},
	methods: {
		onHoverBlock(){
			// Если окно confirm активно, то при наведении на блок кнопка удаления не показывается
			if(this.confirmDeleteIsActive)
				this.showDelete = false
			else 
				this.showDelete = !this.showDelete
		},
		toogleComfirmMenu(confirmDelete = true, showDelete = false){
			return () => {
				this.confirmDeleteIsActive = confirmDelete // меню удаления теперь активно
				this.showDelete = showDelete // кнопка удаления больше неактивна
			}
			},
		hideConfirmMenu(){
			return () => {
				this.confirmDeleteIsActive = false
			}
		},
		load(){
			this.imgIsLoaded = true
		}
	},
	
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
		padding: 0 !important;
		position: relative;
		cursor: pointer;
		background-color: #FFFEFB;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		color: #3F3F3F;
		max-width: 332px;
		position: relative;
		animation-name: appear;
		animation-duration: 1s;
		&__info{
			padding: 0 1rem 1.5rem 1rem;
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
<template>
	<div @mouseenter="showDelete = !showDelete" @mouseleave="showDelete = !showDelete" class="good">
		
		<!-- Товар с картинкой и описанием -->
		<div class="good__img">
			<img src="https://sakhalinstat.gks.ru/storage/document_news/2020/04-20/CVXOgBkK/96adedcd4a9eb59ad3ad2271bed7.jpg" alt="">
			<!-- https://sakhalinstat.gks.ru/storage/document_news/2020/04-20/CVXOgBkK/96adedcd4a9eb59ad3ad2271bed7.jpg -->
		</div>
		<div class="good__info">
			<h3 class="good__title">Наименование товара</h3>
			<p class="good__descr">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
			<p class="good__price">10 000 руб.</p>
		</div>
		<!-- Кнопка удаления -->
			<GoodDelete :showDelete="showDelete"/>
			
	</div>
</template>



<script>
import GoodDelete from "./GoodDelete.vue"

export default {
	name: "GoodBlock",
	components: {
		GoodDelete
	},
	data() {
		return {
			showDelete: false
		}
	},
}
</script>

<style scoped lang="scss">
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
		&__info{
			padding: 0 1rem;
		}
		&__img{
			// max-width: 332px;
			// background-image: url(https://rus-ups7.ru/wp-content/uploads/2019/05/20172610151353.jpg);
			// max-height: 143px;
			// background-size: contain;
			// background-repeat: no-repeat;
			// background-position: center center;
			margin-bottom: 1em;
			& > img {
				width: 100%;
				height: 200px;
				object-fit: contain;
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
<template>
	<div class="good">
		<!-- Товар с картинкой и описанием -->
		<div class="good__img">
			<img src="../assets/good.png" alt="">
		</div>
		<div class="good__info">
			<h3 class="good__title">Наименование товара</h3>
			<p class="good__descr">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
			<p class="good__price">10 000 руб.</p>
		</div>
		<!-- Кнопка удаления -->


	</div>	
</template>

<script>
export default {
	name: "GoodBlock"
}
</script>

<style scoped lang="scss">
	.good{
		background-color: #FFFEFB;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		border-radius: 4px;
		color: #3F3F3F;
		padding-bottom: 1.5rem;
		max-width: 332px;
		position: relative;
		&__info{
			padding: 0 1rem;
		}
		&__img{
			margin-bottom: 1em;
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
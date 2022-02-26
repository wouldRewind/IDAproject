<template>
	<form action="" class="form-good">
		<div class="wrapper">
		<label must class="form-good__name" for="gname">Наименование товара</label>
		<input class="input" type="text" id="gname" name="gname" placeholder="Наименование товара">

		<label class="form-good__descr" for="gdescr">Описание товара</label>
		<textarea  type="text" id="gdescr" name="gdescr" placeholder="Введите описание товара"/>
		
		<label must class="form-good__link" for="glink">Ссылка на изображение товара</label>
		<input type="text" id="glink" name="link" placeholder="Введите ссылку">

		<label must class="form-good__price" for="gprice">Цена товара</label>
		<input class="input" type="number" id="gprice" name="gprice" placeholder="Введите цену">

		<button class="form-good__add" type="button">Добавить товар</button>
		</div>

	
		
	</form>
</template>

<script>
export default {
	name: "AddForm"
}
</script>

<style lang="scss" scoped>
	@import "../scss/_const.scss";
	.form-good{
		max-width: 332px;
		margin: 0 auto;
		padding: 1.5rem;
		background: $whiteBlockColor;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		&__add{
			width: 100%;
			padding: .625rem;
			background: #EEEEEE;
			border-radius: 10px;
			color: $placeholderColor;
			font-size: .75rem;
			font-weight: 600;
		}
		& label{
			font-size: .625rem;
			color: $formTitleColor;
			display: inline-block;
			margin-bottom: 4px;
			&[must]{
				position: relative;
				&::after{
					content: "";
					position: absolute;
					width: 4px;
					height: 4px;
					background-color: $errorColor;
					top: 0;
					right: -5px;
					border-radius: 100%;
				}
			}
		}
		& input{
			padding: .625rem 0 .625rem 1rem;
			margin-bottom: 1rem;
			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
-webkit-appearance: none;
}
			
		}
		& textarea{
			height: 108px;
			resize: none;
		}
		& input,textarea{
			width: 100%;
			border: 0;
			box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			padding: 10px 0 11px 1rem;
			margin-bottom: 1rem;
			&::placeholder{
				font-size: .75rem;
				color: $placeholderColor;
				font-weight: 400;
			}
		}
		& > * {
			display: block;
		}
	}
</style>
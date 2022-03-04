<template>
	<div class="confirm" v-show="confirmMenuIsVisible">
	<div class="confirm-wrap">
		<header class="confirm-header">
			<h3 class="confirm-header__title">
		Удаление товара
			</h3>
			<div class="confirm-header__close">
				X
			</div>
		</header>
	</div>
  <div class="confirm__text">Вы уверены, что хотите удалить товар?</div>
  <div class="confirm-btns">
    <button class="confirm-btns__abort">Отмена</button>
    <button class="confirm-btns__delete">Удалить</button>
  </div>
</div>
</template>

<script>
export default {
	name: "GoodDeleteConfirm",
	props: ['confirmMenuIsVisible']
}
</script>

<style lang="scss">
	@import "../../scss/_const.scss";

	$lightColor: darken(#fff,2);
	$deleteColor: darken($errorColor,5);
	// header-wrap
	.confirm-wrap{
		background: $deleteColor;
		padding: 1rem;
	}

	.confirm{
		background: white;
		width: 100%;
		position: absolute;
		z-index: 4;
		top: 0;
		left: 0;
		box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
		&__text{
			padding: 1rem;
			font-size: .8rem;
			font-weight: 500;
			border-bottom: 1px solid rgba($placeholderColor,.2)
		}
		&-btns{
			display: flex;
			justify-content: flex-end;
			padding: .7rem 1rem;
			&__delete{
				background: $deleteColor;
				color: $lightColor;
				margin-left: .7rem;
				font-family: "Source Sans Pro";
				&:hover{
					background: darken($deleteColor,10);
				}
			}
			&__abort{
				color: $goodColor;
				background: transparent;
				font-family: "Source Sans Pro";
				&:hover{
					color: darken($goodColor,10);
				}
			}
			& > button{
				transition: $transition;
				padding: 0.5rem 0.8rem;
				cursor: pointer;
			}
		}
		&-header{
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $lightColor;
			&__title{
				font-size: 1rem;
			}
			&__close{
				transition: $transition;
				width: .9em;
  				height: .9em;
  				background-color: $lightColor;
  				clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
				cursor: pointer;
				&:hover{
					transform: rotate(180deg);
				}
			}
		}
	}
</style>
<template>
	<transition name="show-confirm">
		<div class="confirm" v-show="confirmMenuIsVisible">
	<div class="confirm-wrap">
		<header class="confirm-header">
			<h3 class="confirm-header__title">
		Удаление товара
			</h3>
		</header>
	</div>
  <div class="confirm__text">Вы уверены, что хотите удалить товар?</div>
  <div class="confirm-btns">
    <button @click="closeConfirmMenu" class="confirm-btns__abort">Отмена</button>
    <button @click="deleteGood(deleteIndex)" class="confirm-btns__delete">Удалить</button>
  </div>
</div>
	</transition>
</template>

<script>
import { useStore } from 'vuex'
export default {
	setup({ closeConfirmMenu }){
		const store = useStore()
		const deleteGood = index => {
			store.dispatch("deleteProduct",index)
			closeConfirmMenu()
		}
		return {
			deleteGood
		}
	},
	name: "GoodDeleteConfirm",
	props: ['confirmMenuIsVisible','closeConfirmMenu','deleteIndex']
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
		}
	}

	.show-confirm-enter-to, .show-confirm-leave-from{
		transform: translateX(100%);
		transform: translateY(0);
		opacity: 1;
	}
	.show-confirm-leave-to, .show-confirm-enter-from{
		transform: translateX(-100%);
		transform: translateY(-100%);
		opacity: 0;
	}

	.show-confirm-enter-active, .show-confirm-leave-active {
		transition: opacity $transition;
		transform: translateX(0);
		transform: translateY(0);
	}
</style>
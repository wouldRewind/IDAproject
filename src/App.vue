<template>
	<div @click="showMenu(false)" v-if="showMobileMenu" class="fade">
		
	</div>
	<main
	:class="{'menuOpened': showMobileMenu}" 
	class="good">
		<div class="good-content">
			<header class="good-content__menu">
				<h1 class="good-content__title">Добавление товара</h1>
				<MobileMenu @click="showMenu"/>
				<div class="good-content__sort">
					<SelectBy/>
				</div>
			</header>
			<div class="good-content__main">
				<GoodGrid/>
				<AddForm :mobile="mobile" :showMobileMenu="showMobileMenu"/>
			</div>
		</div>
	</main>
</template>

<script>
import AddForm from "./components/AddForm.vue"
import GoodGrid from "./components/GoodGrid.vue"
import SelectBy from "./components/SelectBy.vue"
import MobileMenu from "./components/MobileMenu.vue"

export default {
  name: 'App',
  components: {
	GoodGrid,
	AddForm,
	SelectBy,
	MobileMenu
  },
  data(){
	  return {
		  showMobileMenu: false
	  }
  },
  methods: {
	  
	  showMenu(boolVal){
		  this.showMobileMenu = boolVal;
	  }
  }
}
</script>

<style lang="scss">
@import "./scss/_const.scss";
/* Импортирую шрифт с макета */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

html{
	font-family: 'Source Sans Pro', sans-serif;
	background: #FAF9F7;
	font-size: 100%;
}


*{
	/* Разобраться, почему не работает */
	margin: 0px;
	padding: 0px;
	outline: 0;
	border: 0;
	box-sizing: border-box;
	text-decoration: none;
}

// #app {
// }

.fade{
	width: 100%;
	height: 10000000px;
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.5);
	z-index: 1;
}

.good{
	&.menuOpened{
		width: 100%;
		height: 100%;
		position: relative;
		overflow-y: hidden;
	}
	padding: 2rem;
	&-content{
		&__main{
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
	&__menu{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}
	&__title{
		font-size: 1.75rem;
		color: $goodColor;
		font-weight: 600;
	}
	}
}
@media screen and (max-width: 650px){
	.good-content__main{
		justify-content: start;
		margin-top: 2rem;
	}
}
@media screen and (max-width: $mobileMenuAppear){
	.good{
		&-content{
			&__title{
				display: none;
			}
		}
	}
}

</style>

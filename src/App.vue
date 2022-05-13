<template>
	<Fade
	:fadeDegree="5"
	:hideFade="showMenu"
	:hideFadeArg="false"
	:fadeIsVisible="showMobileMenu"/>
	<div class="flex-wrap">
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
				<GoodGrid :mobileMenuIsActive="showMobileMenu"/>
				<AddForm :closeMobileMenu="showMenu"  :showMobileMenu="showMobileMenu"/>
			</div>
		</div>
	</main>
	</div>
</template>

<script>
import Fade from "./components/Fade.vue"
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
	MobileMenu,
	Fade
  },
  data(){
	  return {
		  showMobileMenu: false
	  }
  },
  methods: {
	  showMenu(boolVal){
		  const body = document.querySelector("body").classList 
		  // если мобильное меню больше не показывается - отменяю overflow
		  if(!boolVal)
		  body.remove('prevent-scroll')
		  else
		  body.add('prevent-scroll')

		  this.showMobileMenu = boolVal;
	  }
  },
  beforeCreate(){
	  window.addEventListener("beforeunload",() => {
		  const stringifiedStore = JSON.stringify(this.$store.state)
		  localStorage.setItem("products",stringifiedStore)
	  })
	  if (localStorage && localStorage.products) {
		  this.$store.dispatch("setLocalStorageState",JSON.parse(localStorage.products))
	  }
  },
}
</script>




<style lang="scss">
@import "./scss/_const.scss";
/* Импортирую шрифт с макета */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

html{
	font-family: 'Source Sans Pro', sans-serif;
	background: #FAF9F7;
	font-size: 100%;
	// overflow: hidden;
}

.flex-wrap{
	display: flex;
	justify-content: center;
	padding: 2rem;
}

.fade{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.5);
	z-index: 1;
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

//  resticts #app scroll
.prevent-scroll{
	overflow: hidden;
}



.good{
	
	&.menuOpened{
		width: 100%;
		height: 100%;
		position: relative;
		overflow-y: hidden;
	}
	&-content{
		display: inline-block;
		width: auto;
		margin: 0 auto;
		&__main{
		display: inline-flex;
		flex-direction: row-reverse;
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
		margin-top: 2rem;
		position: relative;
	}
}
@media screen and (max-width: $mobileMenuAppear){

	.good{
		&-content{
			transition: $transition;
			&__title{
				display: none;
			}
		}
	}
}

</style>

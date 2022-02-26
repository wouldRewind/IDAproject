<template>
		<GoodGrid/>
		<AddForm/>

</template>

<script>
import AddForm from "./components/AddForm.vue"
import GoodGrid from "./components/GoodGrid.vue"

export default {
  name: 'App',
  components: {
	GoodGrid,
	AddForm
  }
}
</script>

<style>

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

#app {
}
</style>

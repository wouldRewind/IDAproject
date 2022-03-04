<template>
	<div class="select-by">
		<select v-model="sort" id="choose" name="">
		<option value="name">По наименованию</option>
		<option value="asc">По возрастанию цены</option>
		<option value="desc">По убыванию цены</option>
	</select>
	<img class="arrow" src="../assets/Arrow.png" alt="323">
	</div>
</template>

<script>

export default {
	data(){
		return {
			sort: "name"
		}
	},
	name: "SelectBy",
	updated(){
		this.$store.commit("changeSortBy",this.sort)
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/_const.scss";

.select-by{
	display: inline-block;
	position: relative;
}

.arrow{
	position: absolute;
	top: 15px;
	right: 15px;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
	color: $placeholderColor;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	padding: 10px 27.5px 11px 16px;
	font-size: .75rem;
	font-weight: 400;
	cursor: pointer;
}

select::-ms-expand {
  display: none;
}

	@media screen and (max-width: $mobileMenuAppear){
		select{
			font-size: .7rem;
		}
	}

</style>
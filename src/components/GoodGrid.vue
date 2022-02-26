<template>
	<div class="grid">
		<GoodBlock/>
		<GoodBlock/>
		<GoodBlock/>
		<GoodBlock/>
		<GoodBlock/>
		<GoodBlock/>
	</div>
</template>

<script>
import GoodBlock from "./GoodBlock.vue"
export default {
	name: "GoodGrid",
	components: {
		GoodBlock
	}
}
</script>

<style lang="scss" scoped>
	.grid{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		grid-template-rows: auto;
		grid-gap: 30px;
	}
</style>
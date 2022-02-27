<template>
	<button class="open" type="button">
		+
	</button>
</template>

<script>
export default {
	name: "MobileMenu"
}
</script>


<style lang="scss" scoped>
	@import "../scss/_const.scss";
	.open{
		background-color: lighten($successColor,10); 
		color: #fff;
		border-radius: 100%;
		width: 40px;
		height: 40px;
		font-size: 1rem;
		font-weight: 400;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1.5rem;
		font-weight: 1000;
		cursor: pointer;
		
	}
</style>
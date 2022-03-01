<template>
	<div class="open" type="button">
		<div class="open__line"></div>
	</div>
</template>

<script>
export default {
	name: "MobileMenu"
}
</script>


<style lang="scss" scoped>
	@import "../scss/_const.scss";
	.open{
		$lineHeight: 3px;
		width: 35px;
		height: 24px;
		cursor: pointer;
		display: flex;
		align-items: center;
		position: relative;
		&::after,&::before{
			content: "";
			position: absolute;
			background-color: $goodColor;
			width: 100%;
			height: $lineHeight;
		}
		&::after{
			top: 0;
		}
		&::before{
			bottom: 0;
		}
		&__line{
			width: 100%;
			height: $lineHeight;
			background-color: $goodColor;
		}
	}
</style>
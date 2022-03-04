<template>
	<div @click="hideFade(hideFadeArg)" v-if="fadeIsVisible" class="fade"></div>
</template>

<script>
export default {
	setup() {
		
	},
	name: "Fade",
	props: {
		fadeIsVisible: {
			type: Boolean,
			default: true
		},
		hideFade: {
			type: Function,
			default: boolVal => boolVal
		},
		hideFadeArg: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>

.fade{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.5);
	z-index: 3;
}

</style>
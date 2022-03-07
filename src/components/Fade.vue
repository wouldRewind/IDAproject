<template>
	<transition name="fade-anim">
		<div :style="{ 'z-index': fadeDegree }" @click="hideFade(hideFadeArg)" v-if="fadeIsVisible" class="fade"></div>
	</transition>
</template>

<script>
export default {
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
		},
		fadeDegree: {
			type: Number,
			default: 3
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/_const.scss";


.fade{
	width: 100%;
	height: 100%;
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	background: rgba(0,0,0,.5);
}

	.fade-anim-enter-from, .fade-anim-leave-to {
		opacity: 0;
	}
	.fade-anim-enter-to, .fade-anim-leave-from {
		opacity: 1;
	}


	.fade-anim-enter-active,
	.fade-anim-leave-active{
		transition: opacity $transition;
}


</style>
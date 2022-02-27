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
@import "../scss/_const.scss";
	.grid{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		grid-template-rows: auto;
		grid-gap: 1rem;
	}
	@media screen and (max-width: 1100px){
			.grid {
				// display: none;
				margin: 0 auto;
				grid-template-columns: repeat(2,1fr);
			}
		}
	@media screen and (max-width: 860px){
			.grid {
				// display: none;
				// margin-left: auto;
				margin-right: 0;
				grid-template-columns: repeat(1,1fr);
			}
		}
	@media screen and (max-width: $mobileMenuAppear){
			.grid {
				margin: 0 auto;
				grid-template-columns: repeat(2,1fr);
			}
		}
	@media screen and (max-width: 650px){
			.grid {
				grid-template-columns: repeat(1,1fr);
				grid-gap: 1rem / 0;
				margin-right: 0;
				& .good{
					max-width: 100%;
					// margin: 0 auto;
				}
			}
		}
</style>
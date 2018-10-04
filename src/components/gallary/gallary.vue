<template>
	<div class="container">
		<div class="wrapper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="item of imgs" :key="item.id">
					<img class="swiper-img" :src="item.imgUrl" alt="">
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'gallary',
	props: {
		imgs: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				autoplay: false,
				observeParents: true,
				observer: true,
			},
		};
	},
};
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-container
		overflow inherit

	.container
		display flex
		flex-direction column
		justify-content center
		position fixed
		top 0
		left 0
		right 0
		bottom 0
		z-index 99
		background-color rgba(0,0,0,0.8)
		.wrapper
			height 0
			width 100%
			padding-bottom 100%
			.swiper-img
				width 100%
			.swiper-pagination
				color #fff;
				bottom -1rem
</style>


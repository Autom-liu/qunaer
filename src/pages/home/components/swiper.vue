<template>
<div class="wrapper">
	<swiper :options="swiperOption">
    <swiper-slide v-for="item of imgList" :key="item.id">
			<img class="swiper-img" :src="item.url" alt="">
		</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
			},
			imgList: [
				{
					id: '0001',
					url: 'http://img1.qunarzz.com/piao/fusion/1809/87/534cf2e0a71fff02.jpg_750x200_5c778719.jpg',
				},
				{
					id: '0002',
					url: 'http://img1.qunarzz.com/piao/fusion/1808/59/371af39a4ca5702.jpg_750x200_1a9cfe57.jpg',
				},
				{
					id: '0003',
					url: 'http://img1.qunarzz.com/piao/fusion/1809/6a/847ac7b98f10e202.jpg_750x200_f0593cb5.jpg',
				},
			],
		};
	},
};
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow hidden
		width: 100%
		height: 0 /** 不能写在height上，因为相对的是父级的高度，不是图片的宽高比 */
		padding-bottom: 26.5%
		background-color: #eee
		.swiper-img
			width: 100%
</style>

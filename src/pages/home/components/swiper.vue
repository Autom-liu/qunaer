<template>
<div class="wrapper">
	<swiper :options="swiperOption" v-if="isShow">
    <swiper-slide v-for="item of swiperList" :key="item.id">
			<img class="swiper-img" :src="item.imgUrl" alt="">
		</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		swiperList: Array,
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
			},
		};
	},
	computed: {
		isShow() {
			return this.swiperList.length;
		},
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
		padding-bottom: 31.25%
		background-color: #eee
		.swiper-img
			width: 100%
</style>

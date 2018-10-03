<template>
<div class="wrapper">
	<swiper :options="swiperOption">
		<swiper-slide v-for="(page, index) in iconPage" :key="index">
				<div class="icons">
					<div class="icon" v-for="item of page" :key="item.id">
						<div class="icon-box">
							<img class="icon-img" :src="item.url" alt="">
							<p class="icon-title">{{item.title}}</p>
						</div>
					</div>
				</div>
		</swiper-slide>
	<!-- Optional controls -->
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
</div>
</template>

<script>
export default {
	name: 'HomeIcon',
	data() {
		return {
			swiperOption: {

			},
			iconList: [
				{
					id: 1,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 2,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 3,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 4,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 5,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 6,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点热门景点热门景点热门景点热门景点热门景点热门景点',
				},
				{
					id: 7,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 8,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
				{
					id: 9,
					url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					title: '热门景点',
				},
			],
		};
	},
	computed: {
		iconPage() {
			const result = [];
			const offset = 8;
			const len = this.iconList.length;
			for (let start = 0; start < len; start += offset) {
				result.push(this.iconList.slice(start, start + offset));
			}
			return result;
		},
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';
@import '~@/assets/style/mixins.styl';

	.icons
		overflow hidden
		height 0
		margin-top .1rem
		padding-bottom 50%
		.icon
			position relative
			float left
			width 25%
			height 0
			padding-bottom 25%
			.icon-box
				position absolute
				/** 撑开盒子，让宽高和父级一样，但底部保留一定距离 */
				top 0
				left 0
				right 0
				bottom 0.44rem
				text-align center
				.icon-img
					height 100%
				.icon-title
					line-height .44rem
					color $darkFont
					ellipsis()
</style>


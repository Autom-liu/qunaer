<template>
<div class="wrapper">
	<swiper :options="swiperOption">
		<swiper-slide v-for="(page, index) in iconPage" :key="index">
				<div class="icons">
					<div class="icon" v-for="item of page" :key="item.id">
						<div class="icon-box">
							<img class="icon-img" :src="item.imgUrl" alt="">
							<p class="icon-title">{{item.desc}}</p>
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
	props: {
		iconList: Array,
	},
	data() {
		return {
			swiperOption: {

			},
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


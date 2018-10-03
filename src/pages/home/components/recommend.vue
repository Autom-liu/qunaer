<template>
	<div class="wrapper">
		<div class="title">
			热销推荐
		</div>
		<ul>
			<li class="item" v-for="item of recommendList" :key="item.id">
				<div class="item-img-box">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-right">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc"> {{item.desc}} </p>
					<button class="item-btn">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		recommendList: Array,
	},
	data() {
		return {

		};
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';
@import '~@/assets/style/mixins.styl';

.wrapper
	margin-top .2rem
	.title
		height .8rem
		line-height .8rem
		font-size 16px
		text-indent 2em
		color $darkFont
		background-color #eee
	.item
		display flex
		height 1.9rem
		padding .16rem
		overflow hidden
		.item-img-box
			width 1.7rem
			height 1.7rem
			.item-img
				width 100%
		.item-right
			flex 1
			margin-left .2rem
			min-width 0
			.item-title
				height .54rem
				line-height .54rem
				font-size .32rem
				ellipsis()
			.item-desc
				line-height .4rem
				color #999
				ellipsis()
			.item-btn
				margin-top .16rem
				line-height .44rem
				padding 0 .2rem
				border-radius .1rem
				background-color #ff9300
				color #fff
</style>


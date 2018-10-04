<template>
	<div class="wrapper">
		<div class="banner">
			<img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
			<div class="banner-info">
				<p class="banner-title">故宫AAAAA级景区</p>
				<p class="banner-number">
					<i class="iconfont icon-pic">&#xe62c;</i>
					6
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detail',
};
</script>

<style lang="stylus" scoped>
.wrapper
	.banner
		position relative
		overflow hidden
		height 0
		padding-bottom 55%
		.banner-img
			width 100%
		.banner-info
			display flex
			position absolute
			left 0
			right 0
			bottom 0
			line-height .6rem
			color #fff
			background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
			.banner-title
				flex 1
				text-indent 1em
			.banner-number
				margin-top .1rem
				padding 0 .4rem
				height .4rem
				line-height .4rem
				border-radius .2rem
				background-color rgba(0,0,0,.5)
				.icon-pic
					font-size .28rem
</style>

<template>
	<div class="wrapper">
		<div class="header">
			城市选择
			<router-link to="/">
				<i class="iconfont icon-back">&#xe624;</i>
			</router-link>
		</div>
		<div class="search">
			<input class="search-input" type="text" placeholder="请输入城市名或拼音" />
		</div>
	</div>
</template>

<script>
export default {
	name: 'cityHeader',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.wrapper
	.header
		position relative
		height $headerHeight
		line-height $headerHeight
		background-color $bgColor
		text-align center
		color #fff
		.icon-back
			position absolute
			top 0
			left .2rem
			font-size .4rem
			color #fff
	.search
		height .72rem
		background-color $bgColor
		padding 0 .1rem
		.search-input
			box-sizing border-box
			width 100%
			height .64rem
			padding 0 .2rem
			line-height .64rem
			border-radius .2rem
			text-align center
			color #666
</style>

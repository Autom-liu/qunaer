<template>
	<div class="header">
		<div class="header-left">
			<i class="iconfont icon-back">&#xe624;</i>
		</div>
		<div class="header-input">
			<i class="iconfont icon-serach">&#xe632;</i>
			输入城市/景点
		</div>
		<div class="header-right">
			城市
			<i class="iconfont icon-arrow">&#xe62d;</i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';
.header
	display: flex
	height: 0.86rem
	line-height: .86rem
	background-color: $bgColor
	color: #fff
	.header-left
		float: left
		width: 0.64rem
		text-align: center
		.icon-back
			font-size: .4rem
	.header-input
		flex: 1
		height: .64rem
		line-height: .64rem
		margin-top: .12rem
		margin-left: .2rem
		padding-left: .2rem
		background-color #fff
		border-radius: 5px
		color: #ccc;
	.header-right
		float: right
		width: 1.24rem
		text-align: center

</style>

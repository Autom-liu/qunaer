<template>
	<div class="header">
		<div class="header-left">返回</div>
		<div class="header-input">输入城市/景点</div>
		<div class="header-right">城市</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader',
};
</script>

<style lang="stylus" scoped>
.header
	display: flex
	height: 0.86rem
	line-height: .86rem
	background-color: #00bcd4
	color: #fff
	.header-left
		float: left
		width: 0.64rem
		text-align: center
	.header-input
		flex: 1
		height: .64rem
		line-height: .64rem
		margin-top: .12rem
		margin-left: .2rem
		background-color #fff
		border-radius: 5px
		color: #ccc;
	.header-right
		float: right
		width: 1.24rem
		text-align: center

</style>

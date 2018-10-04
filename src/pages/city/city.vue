<template>
	<div class="wrapper">
		<div class="header">
			城市选择
			<router-link to="/">
				<i class="iconfont icon-back">&#xe624;</i>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'city',
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
</style>


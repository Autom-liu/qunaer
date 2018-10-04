<template>
	<div class="wrapper">
		<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="area-box">
				<ul class="area-tags">
					<li class="area-tag">北京</li>
					<li class="area-tag">北京</li>
					<li class="area-tag">北京</li>
					<li class="area-tag">北京</li>
				</ul>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="area-box">
				<ul class="area-tags">
					<li class="area-tag">北京</li>
					<li class="area-tag">北京</li>
					<li class="area-tag">北京</li>
					<li class="area-tag">北京</li>
				</ul>
			</div>
		</div>
		<div class="area">
			<div class="title">A</div>
			<div class="area-box">
				<ul>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
				</ul>
			</div>
		</div>
		<div class="area">
			<div class="title border">A</div>
			<div class="area-box">
				<ul>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
				</ul>
			</div>
		</div>
		<div class="area">
			<div class="title">A</div>
			<div class="area-box">
				<ul>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
					<li class="area-item border-bottom">北京</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cityList',
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.border-topbottom
	&:before
		border-color $borderColor
	&:after
		border-color $borderColor

.border-bottom
	&:before
		border-color $borderColor

.wrapper
	position absolute
	overflow hidden
	top 1.58rem
	left 0
	right 0
	bottom 0
	.area
		.title
			height .64rem
			line-height .64rem
			text-indent 1em
			background-color #eee
		.area-box
			overflow hidden
			padding 0 .48rem 0 .3rem
			.area-tags
				display flex
				flex-direction row
				flex-wrap: wrap
				justify-content space-between
				padding .2rem 0
				li.area-tag
					width 30%
					height .4rem
					line-height .4rem
					margin .16rem 0
					border 1px solid #ccc
					text-align center
					border-radius 4px
			li.area-item
				height .64rem
				line-height .64rem
</style>


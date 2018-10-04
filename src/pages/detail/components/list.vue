<template>
	<div>
		<div
			class="item"
			v-for="(item, index) of categoryList"
			:key="index"
		>
			<div class="item-title border-bottom">
				<i class="item-title-icon"></i>
					{{item.title}}
			</div>
			<div v-if="item.children" class="item-children">
				<detail-list :category-list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'detailList',
	props: {
		categoryList: Array,
	},
};
</script>

<style lang="stylus" scoped>
.border-bottom
	&:before
		border-color #adadad

.item-title
	position relative
	line-height .8rem
	font-size .32rem
	padding-left .6rem
	.item-title-icon
		display inline-block
		position absolute
		width .36rem
		height .36rem
		top .2rem
		left .2rem
		background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
		background-size .4rem 3rem

.item-children
	padding-left .2rem
</style>


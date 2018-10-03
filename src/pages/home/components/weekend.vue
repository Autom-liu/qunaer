<template>
	<div class="wrapper">
		<div class="title">
			周末去哪儿
		</div>
		<ul>
			<li class="item" v-for="item of weekendList" :key="item.id">
				<div class="item-img-box">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-bottom">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc"> {{item.desc}} </p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		weekendList: Array,
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
		padding .16rem
		overflow hidden
		.item-img-box
			width 100%
			height 0
			overflow hidden
			padding-bottom 37.9%
			.item-img
				width 100%
		.item-bottom
			margin-left .2rem
			.item-title
				height .54rem
				line-height .54rem
				font-size .32rem
				ellipsis()
			.item-desc
				line-height .4rem
				color #999
				ellipsis()
</style>

<template>
	<div>
		<router-link v-show="showAbs" class="header-abs" tag="div" to="/">
			<i class="iconfont icon-back">&#xe624;</i>
		</router-link>
		<div :style="opacityStyle" class="header-fixed" v-show="!showAbs">
			景点详情
			<router-link to="/">
				<i class="iconfont icon-back">&#xe624;</i>
			</router-link>
		</div>
		<div class="test"></div>
	</div>
</template>

<script>
export default {
	name: 'detailHeader',
	data() {
		return {
			showAbs: true,
			opacityStyle: { opacity: 0 },
		};
	},
	methods: {
		handleScroll() {
			const top = document.documentElement.scrollTop;
			if (top > 60) {
				const opacity = Math.min(top / 140, 1);
				this.opacityStyle = { opacity };
				this.showAbs = false;
			} else {
				this.showAbs = true;
			}
		},
	},
	activated() {
		window.addEventListener('scroll', this.handleScroll);
	},
	deactivated() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.test
	height 50rem

.header-abs
	position absolute
	top .2rem
	left .2rem
	width .8rem
	height .8rem
	line-height .8rem
	border-radius 50%
	text-align center
	background-color rgba(0,0,0,.5)
	.icon-back
		color #fff
		font-weight 600

.header-fixed
	position fixed
	top 0
	left 0
	width 100%
	height $headerHeight
	line-height $headerHeight
	background-color $bgColor
	font-weight 600
	text-align center
	color #fff
	.icon-back
		position absolute
		top 0
		left .2rem
		font-size .4rem
		color #fff
</style>


<template>
	<div class="wrapper" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="area-box">
					<ul class="area-tags">
						<li class="area-tag">{{currentCity}}</li>
					</ul>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="area-box">
					<ul class="area-tags">
						<li
							class="area-tag"
							v-for="hotCity of hotCities"
							:key="hotCity.id"
							@touchstart="handleClick(hotCity.name)"
						>
							{{hotCity.name}}
						</li>
					</ul>
				</div>
			</div>
			<div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
				<div class="title">{{key}}</div>
				<div class="area-box">
					<ul>
						<li
							class="area-item border-bottom"
							v-for="city in item"
							:key="city.id"
							@touchstart="handleClick(city.name)"
						>
							{{city.name}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'cityList',
	props: {
		cities: Object,
		hotCities: Array,
		stepLetter: String,
	},
	data() {
		return {
			listHeight: {},
			scrollY: 0,
		};
	},
	methods: {
		initHeight() {
			const alphabet = Object.keys(this.cities);
			for (const key of alphabet) {
				const element = this.$refs[key][0];
				this.listHeight[key] = element ? element.offsetTop : 9999;
			}
		},
		handleClick(city) {
			this.changeCity(city);
			this.$router.push('/');
		},
		...mapMutations(['changeCity']),
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
			probeType: 3,
		});
		this.scroll.on('scroll', (pos) => {
			this.scrollY = Math.abs(Math.round(pos.y));
		});
	},
	updated() {
		this.initHeight();
	},
	computed: {
		curLetter() {
			let res = 'A';
			for (const key in this.listHeight) {
				if (this.scrollY > this.listHeight[key]) {
					res = key;
				}
			}
			return res;
		},
		...mapState({ currentCity: 'city' }),
	},
	watch: {
		stepLetter() {
			const element = this.$refs[this.stepLetter][0];
			this.scroll.scrollToElement(element);
		},
		scrollY(val) {
			this.$emit('scrolling', this.curLetter);
		},
	},
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


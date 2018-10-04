<template>
	<div class="wrapper">
		<div class="header">
			城市选择
			<router-link to="/">
				<i class="iconfont icon-back">&#xe624;</i>
			</router-link>
		</div>
		<div class="search">
			<input
				class="search-input" type="text"
				placeholder="请输入城市名或拼音"
				v-model="keyword"
			/>
		</div>
		<div class="search-list" ref="search" v-show="keyword">
			<ul>
				<li
					class="list-item border-bottom"
					v-for="city of cityList"
					:key="city.id"
					@click="handleClick(city.name)"
				>
					{{city.name}}
				</li>
				<li class="list-item border-bottom" v-show="isNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
	name: 'cityHeader',
	props: {
		cities: Object,
	},
	data() {
		return {
			keyword: '',
			cityList: [],
			timer: null,
		};
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.search);
	},
	methods: {
		handleClick(city) {
			this.$store.dispatch('changeCity', city);
			this.$router.push('/');
		},
	},
	computed: {
		isNoData() {
			return !this.cityList.length;
		},
	},
	watch: {
		keyword(val) {
			if (this.timer) {
				clearTimeout(this.timer);
			}
			if (!val) {
				this.cityList = [];
				return;
			}
			this.timer = setTimeout(() => {
				this.cityList = [];
				for (const index of Object.keys(this.cities)) {
					this.cities[index].forEach((city) => {
						if (city.spell.indexOf(val) > -1 || city.name.indexOf(val) > -1) {
							this.cityList.push(city);
						}
					});
				}
			});
		},
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.border-bottom
	&:before
		border-color $borderColor

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
	.search-list
		z-index 1
		position absolute
		overflow hidden
		top 1.58rem
		bottom 0
		left 0
		right 0
		background-color #eee;
		li.list-item
			height .76rem
			line-height .76rem
			text-indent 1em
			background-color #fff
</style>

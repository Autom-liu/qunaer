<template>
	<div class="wrapper"
		@touchstart="handleTouchStart"
		@touchmove="handleTouchMove"
		@touchend="handleTouchEnd"
	>
		<ul>
			<li
				:class="{'alphabet': true, 'active': letter === curLetter}"
				v-for="(letter, index) of letters"
				:key="index"
				:ref="letter"
				@click="handleClick"
			>
				{{letter}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'cityAlphabet',
	props: {
		cities: Object,
		propsLetter: String,
	},
	data() {
		return {
			touchStutus: false,
			curLetter: this.propsLetter,
			startY: 0,
			timer: 0,
		};
	},
	updated() {
		this.startY = this.$refs.A[0].offsetTop;
	},
	methods: {
		handleClick(e) {
			this.curLetter = e.target.innerText;
		},
		handleTouchStart(e) {
			this.touchStutus = true;
		},
		handleTouchMove(e) {
			if (this.touchStutus) {
				if (this.timer) {
					clearTimeout(this.timer);
				}
				this.timer = setTimeout(() => {
					const endY = e.touches[0].clientY - 79;
					if (endY > this.startY) {
						const index = Math.floor((endY - this.startY) / 20);
						this.curLetter = this.letters[index];
					}
				}, 16);
			}
		},
		handleTouchEnd(e) {
			this.touchStutus = false;
		},
	},
	computed: {
		letters() {
			return Object.keys(this.cities);
		},
	},
	watch: {
		propsLetter(val) {
			this.curLetter = val;
		},
		curLetter(val) {
			if (this.propsLetter !== val) {
				this.$emit('alphabet-change', this.curLetter);
			}
		},
	},
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.wrapper
	position absolute
	display flex
	width .4rem
	top 1.58rem
	bottom 0
	right 0
	flex-direction column
	justify-content center
	li.alphabet
		color $bgColor
		line-height .4rem
		text-align center
	li.alphabet.active
		color #ff5348
</style>


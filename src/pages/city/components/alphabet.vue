<template>
	<div class="wrapper">
		<ul>
			<li
				class="alphabet"
				v-for="(item, alphabet) of cities"
				:key="alphabet"
			>
				{{alphabet}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'cityAlphabet',
		props: {
		cities: Object,
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
</style>


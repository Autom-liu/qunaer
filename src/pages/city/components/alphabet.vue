<template>
	<div class="wrapper">
		<ul>
			<li class="alphabet">A</li>
			<li class="alphabet">A</li>
			<li class="alphabet">A</li>
			<li class="alphabet">A</li>
			<li class="alphabet">A</li>
			<li class="alphabet">A</li>
			<li class="alphabet">A</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'cityAlphabet',
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


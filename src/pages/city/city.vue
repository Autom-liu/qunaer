<template>
	<div>
		<city-header></city-header>
		<city-list></city-list>
	</div>
</template>

<script>
import CityHeader from './components/header';
import CityList from './components/list';
export default {
	name: 'city',
	components: {
		CityHeader,
		CityList,
	},
};
</script>

<style lang="stylus" scoped>

</style>


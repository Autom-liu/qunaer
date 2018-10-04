<template>
	<div>
		<city-header></city-header>
		<city-list :cities="cities" :hot-cities="hotCities"></city-list>
		<city-alphabet :cities="cities"></city-alphabet>
	</div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/header';
import CityList from './components/list';
import CityAlphabet from './components/alphabet';

export default {
	name: 'city',
	components: {
		CityHeader,
		CityList,
		CityAlphabet,
	},
	data() {
		return {
			cities: {},
			hotCities: [],
		};
	},
	methods: {
		getCityInfo() {
			axios.get('/api/travel/city.json')
				.then(res => res.data)
				.then(data => (data.ret ? data.data : this.handleError()))
				.then(data => this.handleData(data));
		},
		handleData(data) {
			console.log(data);
			this.cities = data.cities;
			this.hotCities = data.hotCities;
		},
		handleError(msg) {

		},
	},
	mounted() {
		this.getCityInfo();
	},
};
</script>

<style lang="stylus" scoped>

</style>


<template>
	<div>
		<city-header></city-header>
		<city-list
			:cities="cities"
			:hot-cities="hotCities"
			:step-letter="stepLetter"
			@scrolling="proxycurLetter"
		></city-list>
		<city-alphabet
			:cities="cities"
			:props-letter="curLetter"
			@alphabet-change="alphabetChange"
		></city-alphabet>
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
			curLetter: 'A',
			stepLetter: 'A',
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
			this.cities = data.cities;
			this.hotCities = data.hotCities;
		},
		handleError(msg) {

		},
		alphabetChange(alphabet) {
			this.curLetter = alphabet;
			this.stepLetter = alphabet;
		},
		proxycurLetter(letter) {
			// console.log(letter);
			this.curLetter = letter;
		},
	},
	mounted() {
		this.getCityInfo();
	},
};
</script>

<style lang="stylus" scoped>

</style>


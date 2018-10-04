<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiper-list="swiperList"></home-swiper>
		<home-icons :icon-list="iconList"></home-icons>
		<home-recommend :recommend-list="recommendList"></home-recommend>
		<home-weekend :weekend-list="weekendList"></home-weekend>
	</div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import HomeHeader from './components/header';
import HomeSwiper from './components/swiper';
import HomeIcons from './components/icons';
import HomeRecommend from './components/recommend';
import HomeWeekend from './components/weekend';

export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend,
	},
	data() {
		return {
			lastCity: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: [],
		};
	},
	methods: {
		getHomeInfo() {
			axios.get(`/api/travel/index.json?city=${this.city}`)
				.then(res => res.data)
				.then(data => data.data)
				.then(data => this.handleData(data));
		},
		handleData(data) {
			this.swiperList = data.swiperList;
			this.iconList = data.iconList;
			this.recommendList = data.recommendList;
			this.weekendList = data.weekendList;
		},
	},
	computed: {
		...mapState(['city']),
	},
	mounted() {
		this.getHomeInfo();
	},
	activated() {
		if (this.lastCity !== this.city) {
			this.lastCity = this.city;
			this.getHomeInfo();
		}
	},
};
</script>


<style>

</style>

<template>
	<div>
		<home-header :city="city"></home-header>
		<home-swiper :swiper-list="swiperList"></home-swiper>
		<home-icons :icon-list="iconList"></home-icons>
		<home-recommend :recommend-list="recommendList"></home-recommend>
		<home-weekend :weekend-list="weekendList"></home-weekend>
	</div>
</template>

<script>
import axios from 'axios';
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
			city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: [],
		};
	},
	methods: {
		getHomeInfo() {
			axios.get('/api/index.json')
				.then(res => res.data)
				.then(data => data.data)
				.then(data => this.handleData(data));
		},
		handleData(data) {
			this.city = data.city;
			this.swiperList = data.swiperList;
			this.iconList = data.iconList;
			this.recommendList = data.recommendList;
			this.weekendList = data.weekendList;
		},
	},
	mounted() {
		this.getHomeInfo();
	},
};
</script>


<style>

</style>

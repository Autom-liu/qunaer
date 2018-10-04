<template>
	<div class="wrapper">
		<detail-banner
			@click.native="bannerClick"
			:banner-img="bannerImg"
			:sight-name="sightName"
		></detail-banner>
		<fade>
			<gallary :imgs="imgs" v-show="showGallary" @click.native="bannerClick"></gallary>
		</fade>
		<detail-header></detail-header>
		<detail-list :category-list="categoryList"></detail-list>
	</div>
</template>

<script>
import gallary from '@/components/gallary/gallary';
import fade from '@/components/fade/fade';
import axios from 'axios';
import detailBanner from './components/banner';
import detailHeader from './components/header';
import detailList from './components/list';

export default {
	name: 'detail',
	components: {
		detailBanner,
		gallary,
		detailHeader,
		detailList,
		fade,
	},
	data() {
		return {
			imgs: [
				{
					id: 1,
					imgUrl: 'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png',
				},
				{
					id: 2,
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_r_800x800_7f96ccf9.jpg',
				},
			],
			showGallary: false,
			bannerImg: '',
			sightName: '',
			categoryList: [],
		};
	},
	methods: {
		bannerClick() {
			this.showGallary = !this.showGallary;
		},
		getDetailData() {
			axios.get('/api/travel/detail.json', {
				params: this.$route.params.id,
			}).then(res => res.data)
			.then(data => (data.ret ? data.data : this.handleError(data.msg)))
			.then(data => this.handleData(data));
		},
		handleData(data) {
			this.bannerImg = data.bannerImg;
			this.sightName = data.sightName;
			this.categoryList = data.categoryList;
		},
	},
	mounted() {
		this.getDetailData();
	},
};
</script>

<style lang="stylus" scoped>

</style>

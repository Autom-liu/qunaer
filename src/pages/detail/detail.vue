<template>
	<div class="wrapper">
		<detail-banner @click.native="bannerClick"></detail-banner>
		<gallary :imgs="imgs" v-show="showGallary" @click.native="bannerClick"></gallary>
		<detail-header></detail-header>
	</div>
</template>

<script>
import gallary from '@/components/gallary/gallary';
import detailBanner from './components/banner';
import detailHeader from './components/header';

export default {
	name: 'detail',
	components: {
		detailBanner,
		gallary,
		detailHeader,
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
		};
	},
	methods: {
		bannerClick() {
			this.showGallary = !this.showGallary;
		},
	},
};
</script>

<style lang="stylus" scoped>

</style>

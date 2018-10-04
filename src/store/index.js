import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let defaultCity = '广州';
try {
	defaultCity = localStorage.city || defaultCity;
} catch (e) {
	console.log(e);
}

export default new Vuex.Store({
	state: {
		city: defaultCity,
	},
	actions: {
		changeCity(ctx, city) {
			ctx.commit('changeCity', city);
		},
	},
	mutations: {
		changeCity(state, city) {
			state.city = city;
			localStorage.city = city;
		},
	},
});

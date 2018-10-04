let defaultCity = '广州';
try {
	defaultCity = localStorage.city || defaultCity;
} catch (e) {
	console.log(e);
}

export default {
	city: defaultCity,
};

module.exports = {
	baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',
	assetsDir: 'static',
	devServer: {
    proxy: {
      '/api': {
				target: 'http://www.autom.com',
				ws: true,
        changeOrigin: true,
			},
		},
	},
};

var webpack = require('webpack');

var path = require('path');

module.exports = {
	entry: [
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			__dirname + '/resources/js/index.jsx',
	    ],

	module: {
	   loaders: [{
			test   : /\.jsx?$/,
			exclude: /node_modules/,
			loader : 'babel',
			query  : {
				presets:['react','es2015']
			}
	   }]
	},

	output: {
		path      : __dirname + '/public/js',
		filename  : "index.js",
		publicPath: 'http://localhost:3000/public/js/'
	},

	resolve: {
		root: path.resolve('/'),
	    extensions: ['', '.js', '.jsx']
	},

	devServer: {
		port       : 3000,
		contentBase: 'http://localhost:3000/addons/public/js/',
		hot        : true
	},

	plugins: [
	    new webpack.HotModuleReplacementPlugin()
	]
};
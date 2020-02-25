const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: ['@babel/polyfill', './src/js/index.js'],
	output: {
		path: path.resolve(__dirname, 'bin_dev'),
		filename: 'js/bundle.js'
	},
	devServer: {
		contentBase: './bin_dev'
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			lottie: 'lottie-web',
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
	],


	module: {

		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
	      test: /\.scss$/,
	      use: [{
	        loader: "style-loader" // creates style nodes from JS strings
	      }, {
	        loader: "css-loader" // translates CSS into CommonJS
	      }, {
	        loader: "sass-loader" // compiles Sass to CSS
	      }]
	    },
		]
	},

};

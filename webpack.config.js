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
		]
	},

};

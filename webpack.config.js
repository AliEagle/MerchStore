const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),

		new MiniCssExtractPlugin({
			filename: 'assets/[name].css',
		}),

		new webpack.DefinePlugin({
			'process.env': {
				REACT_APP_CLIENT_ID: JSON.stringify(process.env.REACT_APP_CLIENT_ID),
				API_KEY: JSON.stringify(process.env.API_KEY),
			},
		}),

		new Dotenv({
			path: path.resolve(__dirname, './sys.env'),
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		port: 3005,
	},
};

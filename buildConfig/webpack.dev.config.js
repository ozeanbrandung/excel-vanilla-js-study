//const webpack = require("webpack");
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.js');

const devConfig = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							postcssOptions: {
								plugins: ['postcss-preset-env'],
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
	devServer: {
		port: 3000,
		open: true,
		// This allows you to specify the base path for all the assets within your application.
		// publicPath: "/",
		// will redirect 404s to /index.html
		historyApiFallback: true,
		hot: true,
	},
	// plugins: [
	//     new CopyPlugin({
	//         patterns: [
	//             { from:  path.resolve(__dirname, 'public', 'static'), to: path.resolve(__dirname, 'build') },
	//         ],
	//     }),
	//     new Dotenv({
	//         //path: envPath,
	//         systemvars: !isDevelopment,
	//     })
	// ]
});

module.exports = devConfig;

const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const commonConfig = require('./webpack.config.js');

const devConfig = merge(commonConfig, {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.s(a|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env'],
							},
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
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
	],
});

module.exports = devConfig;

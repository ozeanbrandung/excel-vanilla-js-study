const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),

	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js',
		// Asset Modules is a type of module that allows one to use asset files (fonts, icons, etc) without configuring additional loaders
		// and as of webpack 5, using the built-in Asset Modules, no need to externally add file-loader, url-loader and raw-loader now.
		// assetModuleFilename generates all the image assets inside the images directory inside the dist directory,
		// you can skip this, by default it will generate all the image assets inside the dist directory
		assetModuleFilename: 'images/[hash][ext][query]',
		clean: true,
		// This allows you to specify the base path for all the assets within your application.
		publicPath: '/',
	},

	// module: webpack only understands JavaScript and JSON files.
	// Loaders allow webpack to process other types of files and convert them into valid modules.
	module: {
		rules: [
			{
				test: /\.(js|ts)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			// Note that if you're already using babel-loader to transpile your code, you can use @babel/preset-typescript and let Babel handle both your JavaScript and TypeScript files instead of using an additional loader.
			// Keep in mind that, contrary to ts-loader, the underlying @babel/plugin-transform-typescript plugin does not perform any type checking.
			// {
			//     test: /\.ts$/,
			//     loader: 'ts-loader'
			// },
			{
				test: /\.(png|jpe?g|gif|svg|ico)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext][query]',
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.ts'],
		// absolute paths
		alias: {
			'@': path.resolve(__dirname, '../src/'),
		},
		preferAbsolute: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
		}),
	],
};

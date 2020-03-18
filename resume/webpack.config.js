const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	mode: "development",
	entry: {
		'app': './src/app.jsx'
	},
	// output 是放入產生出來的結果的相關參數
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', 'css', '.scss'],
		modules: [
			'node_modules',
			path.resolve(__dirname, 'src/img'),
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-class-properties']
					}
				}
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
						options: { injectType: 'linkTag' }
					},
					{
						loader: 'file-loader',
						options: { name: '../css/[name].css' },
					},
					{ loader: 'sass-loader' }
				],
			},
			{
				test: /\.(png|jpg|gif|svg|jpeg|)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 15360,
							name: "[name]-[hash:5].min.[ext]",
							publicPath: "static/",
							outputPath: "static/"
						}
					}
				]
			}
		]
	},
	devServer: {
		inline: true,
		port: 3000
	},
	plugins: [HTMLWebpackPluginConfig],
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	entry: {
		'app': './src/app.jsx'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx', 'css', '.scss']
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
		contentBase: path.join(__dirname, 'src'),
		publicPath: "/",
		port: 3000
	},
	plugins: [HTMLWebpackPluginConfig],
};
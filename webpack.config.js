var path = require('path');

var config = {
	entry : './entry.js',
	output: {
		filename : 'main.js',
		path : path.resolve(__dirname, 'assets/js')
	},
	module : {
		rules : [
			{
				test : /\.sass$/,
				use : [{
					loader : "style-loader"
				}, {
					loader : "css-loader"
				}, {
					loader : "sass-loader",
					options : {
						includePaths : [
							"./node_modules/materialize-css/sass",
							"./assets/sass/components"
						]
					}
				}],
			},
			{
				test : /\.(eot|svg|ttf|woff|woff2)$/,
				use : 'file-loader?name=../fonts/roboto/[name].[ext]'
			},
			{
				test: /\.(jpg|jpeg|png|svg)$/,
				use: 'file-loader?name=../images/[name].[ext]'
			}

		],
	}
}

module.exports = config;
var path = require('path');

var config = {
	entry : './entry.js',
	output: {
		path : './assets/js',
		filename : 'main.js'
	},
	module : {
		loaders : [
			{
				test : /\.sass$/,
				loaders : ['styles', 'css', 'sass']
			},
			{
				test : /\.(eot|svg|ttf|woff|woff2)$/,
				loader : 'file?name=../fonts/roboto/[name].[ext]'
			}
		]
	},
	sassLoader : {
		includePaths : [
			path.resolve(__dirname, "node_modules/materialize-css/sass"),
			path.resolve(__dirname, "assets/sass/components"),
		]
	}
}

module.exports = config;
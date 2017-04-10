const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: "./js/script.js",
  output: {
    path: __dirname + "/excluded/dist",
    filename: "bundle.js"
  },
  module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'js'),
			},
			{
				test : /\.css$/,
				loader: "style-loader!css-loader",
			},
			{ 
				test: /\.png$/,
				loader: "url-loader?mimetype=image/png" 
			}
		]
	}
}
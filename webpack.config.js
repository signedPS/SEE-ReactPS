const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
  context: resolve(__dirname + '/src'),
  entry: {
    app: './app.js',
    html: './index.html',
  },
  output:{
         filename: '[name].js',
         path: __dirname + '/dist',
     },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
       test: /\.json$/,
       loader: 'json-loader'
     },
      {
        test: /\.html$/,
 	      loader: 'file-loader?name=[name].[ext]',
      },
			{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
   ],
 },
 plugins: [
   new CopyWebpackPlugin([
     {
         from: 'img/items/*.*',
         to: resolve(__dirname,  'dist/src/'),
     },
   {
       from: 'img/*.*',
       to: resolve(__dirname, 'dist/src/'),
   }
 ]),
],
}

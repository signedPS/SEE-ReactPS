var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const resolve = require('path').resolve;

module.exports = function (config) {
  config.set({
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'Firefox' : 'Chrome'], //run in Chrome or firefox
    singleRun: true, //just run once by default
    frameworks: [
      'mocha',
      'sinon-chai'
    ], //use the mocha test framework
		plugins: [
  		'karma-chrome-launcher',
  		'karma-tap',
  		'karma-sourcemap-loader',
  		'karma-webpack', // *** This 'registers' the Karma webpack plugin.
			'karma-mocha',
      'karma-sinon-chai'
		],
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: {
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
              presets: ['react', 'es2015', 'stage-2']
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
     }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};

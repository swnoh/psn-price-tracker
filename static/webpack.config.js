const webpack = require('webpack');
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.css?/,
            exclude: /node_modules/,
            use:  ['style-loader', 'css-loader']
          },
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 80000,
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]
        }
        ]
    },

    optimization: {
        minimizer: [
          new UglifyWebpackPlugin()
        ]
      }
};

module.exports = config;
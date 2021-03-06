'use strict';

const Webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//const buildDirectory = path.join(__dirname, 'build');
const buildDirectory = path.join(__dirname, '/assets');
console.log("the build directory is ");
console.log(buildDirectory);
module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app.js',
    path: buildDirectory,
  },
  devtool: false,
  devServer: {
/*
    proxy: {
      '/frontpage': {
        target: './src/assets/frontpage.html',
        
      },
    },
*/
    contentBase:[buildDirectory,
    
        
        path.join(__dirname, './src/assets'),
      ],
      
     // contentBase:'',
    port: process.env.PORT || 8080
  },

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index',
      template: 'src/assets/index.html'}),
    
    new HtmlWebpackPlugin({
      filename: 'frontpage',
      template: 'src/assets/frontpage.html'
  }),
    new HtmlWebpackPlugin({
      filename: 'statistics',
      template: 'src/assets/statistics.html'
  }),
    new HtmlWebpackPlugin({
      filename: 'visualization',
      template: 'src/assets/d3-visualization.html'
    }),
  //change the database name,username and password to yours and run (details to be found in readme)
    new Webpack.EnvironmentPlugin({
      'NEO4J_URI': 'neo4j://localhost:7687',
      'NEO4J_DATABASE': 'covid - default',
      'NEO4J_USER': 'neo4j',
      'NEO4J_PASSWORD': '1317Qscgy55',
      'NEO4J_VERSION': ''
    })
  ],

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|ico|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
};


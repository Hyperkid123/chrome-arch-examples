const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies

const fedPlugin = new ModuleFederationPlugin({
  name: 'moduleSharingDemo',
  library: { type: 'var', name: 'moduleSharingDemo' },
  filename: 'remoteEntry.js',
  shared: {
    react: {
      singleton: true,
      requiredVersion: deps.react
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom']
    }
  },
  exposes: {
    './ButtonB': path.resolve(__dirname, 'src/modules/module-b.js'),
    './ButtonC': path.resolve(__dirname, 'src/modules/module-c.js'),
  }
})

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html', inject: false}),
    fedPlugin
  ],
  devServer: {
    devMiddleware: {
      writeToDisk: true
    }
  }
}

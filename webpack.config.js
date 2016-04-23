module.exports = {
  env: ['node'],
  entry: './src/ImageComponent.js',
  output: {
    path: './build/',
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
        exclude: /node_modules/,
        loader: 'file?limit=8192&name=images/[hash].[ext]',
      },
    ]
  }
};

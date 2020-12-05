const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader' 
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
          test: /\.(jpg|gif|png|ico|jpeg)$/,
          use: [
              { 
                  loader: 'file-loader',
                  options: {}
                }
            ]
        },
        {
            test: /\.(jpg|gif|png|ico|jpeg)$/,
            use: [
                { 
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images',
                    }
                  }
              ]
          }
      ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          buildTime: new Date().toISOString(),
          template: 'public/index.html'
        })
    ],

    devServer: {
        open: true,
        historyApiFallback: true
    }
  };
  
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  mode: 'development',	
  resolve: {
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  entry: {
    polyfills: "./src/polyfills.ts",
    main: "./src/app.ts"
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // output directory
    filename: "[name].js" // name of the generated bundle
  },
  module: {
    rules: [{
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.ts$/,
        enforce: "pre",
        loader: 'tslint-loader'
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(mp3|jpeg|png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.ts$/,
        loader: [
          'angular2-load-children-loader' // this loader replace loadChildren value to function to call require.
        ],
      }
    ]
  },
  devtool: "source-map",
  devServer: {
      historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
        },
      },
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
    }),
    new webpack.ContextReplacementPlugin(
        /\@angular(\\|\/)core(\\|\/)fesm5/,
        path.resolve(__dirname, 'src'),{}
    ),
    new FilterWarningsPlugin({ 
      exclude: /any-warnings-matching-this-will-be-hidden/ 
    }),
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })
  ]
};

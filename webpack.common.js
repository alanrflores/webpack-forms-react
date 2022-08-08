//AVISO: casi todo webpack.config está aquí.
const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
            },
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use:[
            "style-loader", 
        {
            loader : "css-loader",
            options : {
                importLoaders: 1,
                modules: true,
            },
         },
        ],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", "jsx", "json"],
  },
  target: ["web", "es5"],
};
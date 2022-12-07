const path = require("path");

// console.log(process.env.NODE_ENV)
module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    library:{
      name: 'webSdkComponent',
      type:"umd"
    },
    path: path.resolve(__dirname, ".", "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  performance: {
    hints: false, // 枚举
    maxAssetSize: 50000000000,
  },
  devServer: {
    hot: true,
    host: "192.168.0.95",
    liveReload: true,
    static: [
      path.resolve(__dirname, ".", "public"),
    ],
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    preferRelative: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
          },
          "sass-loader",
        ],
      },
      {
				// 图片处理loader配置
				test: /\.(png|jpg|gif|svg)$/, // 正则匹配图片
				use: [
				  {
					loader: "url-loader",
					options: {
					// limit:设定大小阀值
					  limit: 8196,
					  outputPath: "image",
					  esModule: false,
					},
				  },
				],
				type: 'javascript/auto',
			},
      {
        test: /\.art$/,
        loader: "art-template-loader",
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

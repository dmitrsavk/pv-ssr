const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = {
  webpack: function(config, { isServer }) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        })
      );
    }

    config.module.rules.push({
      test: /\.(ico|jpe?g|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|ogv)(\?.*)?$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '../static/assets/'
          }
        }
      ]
    });

    return config;
  }
};

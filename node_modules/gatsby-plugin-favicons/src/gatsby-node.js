import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

module.exports.onCreateWebpackConfig = ({ actions }, options) => {
  actions.setWebpackConfig({
    plugins: [
      new FaviconsWebpackPlugin({
        inject: false,
        prefix: 'favicons/',
        ...options
      })
    ]
  });
};

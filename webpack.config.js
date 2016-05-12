var getConfig = require('hjs-webpack');

module.exports = Object.assign(
  getConfig({
    in: 'src/client.js',
    out: 'public',
    html: false,
    clearBeforeBuild: true,
    devServer: {
      contentBase: __dirname
    }
  }),

  {
    resolve: {
      modulesDirectories: ['src', 'node_modules']
    }
  }
);

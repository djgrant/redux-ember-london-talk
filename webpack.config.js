var getConfig = require('hjs-webpack');

module.exports = Object.assign(
  getConfig({
    in: 'src/client.js',
    out: 'public',
    clearBeforeBuild: true
  }),

  {
    resolve: {
      modulesDirectories: ['src', 'node_modules']
    }
  }
);

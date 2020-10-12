const CracoLessPlugin = require('craco-less');
const path = require('path')

function pathHandler (pathUrl) {
  return path.join(__dirname,pathUrl)
}
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
            modules: {localIdentName: '[local]_[hash:6]'}
        },
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      // 别名: 磁盘路径
      '@': pathHandler('./src'),
      'Comp': pathHandler('./src/components')
    }
  }
};
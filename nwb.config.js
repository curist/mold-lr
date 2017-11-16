module.exports = {
  type: 'react-app',
  webpack: {
    publicPath: '',
    extra: {
      node: {
        fs: 'empty'
      }
    },
    rules: {
      css: {
        options: {
          modules: true,
          localIdentName: '[local]-[hash:base64:10]'
        }
      }
    }
  }
}

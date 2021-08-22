module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Crm Hack Umeem',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
};

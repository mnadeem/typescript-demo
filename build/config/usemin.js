module.exports = {
  html: ['<%= appConfig.paths.dist %>/{,*/}*.html'],
  css: ['<%= appConfig.paths.dist %>/styles/{,*/}*.css'],
  options: {
    assetsDirs: ['<%= appConfig.paths.dist %>',
      '<%= appConfig.paths.dist %>/images'
    ]
  }
};
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: ['<%= appConfig.paths.temp %>',
        '<%= appConfig.paths.dist %>/{,*/}*',
        '!<%= appConfig.paths.dist %>/.git*'
      ]
    }]
  },
  server: '<%= appConfig.paths.temp %>',
  samba: '<%= appConfig.paths.samba %>',
  reports: '<%= buildConfig.paths.reports %>/{,*/}*'
};
module.exports = {
  bower: {
    files: ['bower.json'],
    tasks: ['wiredep']
  },
  ts: {
	    files: '<%= appConfig.paths.app %>/src/**/*.ts',
	    tasks: ['ts:dev'],
	    options: {
	      livereload: '<%= appConfig.ports.livereload %>'
	    }
	  },
  styles: {
    files: ['<%= appConfig.paths.app %>/styles/{,*/}*.css'],
    tasks: ['newer:copy:styles', 'autoprefixer']
  },
  gruntfile: {
    files: ['Gruntfile.js']
  },
  livereload: {
    options: {
      livereload: '<%= appConfig.ports.livereload %>'
    },
    files: ['<%= appConfig.paths.app %>/{,*/}*.html',
      '<%= appConfig.paths.temp %>/styles/{,*/}*.css',
      '<%= appConfig.paths.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    ]
  }
};
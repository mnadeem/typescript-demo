module.exports = {
  options: {
    port: '<%= appConfig.ports.app %>',
    hostname: 'localhost',
    livereload: '<%= appConfig.ports.livereload %>'
  },
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
    	  var middlewares = [];

          // Serve static files.

          middlewares.push(connect.static(require('path').resolve('.tmp')));
          middlewares.push(connect().use('/vendor', connect.static(require('path').resolve('./vendor'))));
          middlewares.push(connect.static(require('path').resolve('app')));
          
        return middlewares;
      }
    }
  },  
  dist: {
    options: {
      open: true,
      base: '<%= appConfig.paths.dist %>'
    }
  }
};
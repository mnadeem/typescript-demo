module.exports = {
		options: {                    // use to override the default options, see : http://gruntjs.com/configuring-tasks#options
			target: 'es3',            // es3 (default) / or es5
			module: 'commonjs',       // amd (default), commonjs
			sourcemap: false,          // true  (default) | false
			declaration: false,       // true | false  (default)
			nolib: false,             // true | false (default)
			comments: false           // true | false (default)
		},
		dev: {                          // a particular target   
			src: ["app/src/**/*.ts"],       // The source typescript files, See : http://gruntjs.com/configuring-tasks#files
			out: 'app/src/app.js',    // If specified, generate an out.js file which is the merged js file
		},
		test: {                          // a particular target   
			src: ["test/spec/**/*.ts"],       // The source typescript files, See : http://gruntjs.com/configuring-tasks#files
		}
}
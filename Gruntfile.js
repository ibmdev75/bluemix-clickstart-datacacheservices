'use strict';
module.exports = function(grunt) {
	  grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    
	 	clean: {
			files: ['target']
		},
	    
	    uglify: {
	      minify: {
	        files: [ 
	                {
	                	expand: true,
	                	cwd: 'src/main/webapp/js',
	                	src: ['*.js'],
	                	dest: 'src/main/webapp/js/',
	                	ext: '.min.js'
	                }]
	      }
	    }
	  });
	  grunt.loadNpmTasks('grunt-contrib-clean');
	  grunt.loadNpmTasks('grunt-contrib-uglify');
	  grunt.registerTask('default', ['clean','uglify:minify']);
	};

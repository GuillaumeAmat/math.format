
module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	
	
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		
		jshint: {
			files: [
				'math.format.js'
			]
		},
		
		qunit: {
			all: ['test/index.html']
		}
	});
	
	
	
	grunt.registerTask('default', [
		'jshint',
		'qunit'
	]);
};

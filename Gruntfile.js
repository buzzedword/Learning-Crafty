module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          Crafty: true
        }
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('default', ['jshint']);

};
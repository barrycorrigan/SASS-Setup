module.exports = function(grunt) {

    /**
      * All configuration goes here
      * Rember its not only SASS/CSS you can configure here
      * You can concatenate js files into one file
      * You can compress images
      * Read more here - http://bit.ly/1EPWJYZ
    */


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['css/scss/*.scss' ],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        },
        sass: {
            options: {
                sourcemap: 'none',
                style: 'compressed'
            },
            dist: {
                files: {
                    'css/main.css': 'css/scss/main.scss'
                }
            }
        }


    });


    /**
      * Where we tell Grunt we plan to use these plug-ina.
      * Search for more here - http://gruntjs.com/plugins
    */

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    /**
      * Where we tell Grunt what to do
      * Navigate to your project folder
      * Type "grunt" into the terminal.
      * Let the magic begin
    */

    grunt.registerTask('default', ['watch', 'sass']);
};
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'sass/styles.scss': 'css/styles.css'
        }
      }
    },

    autoprefixer: {
      single_file: {
        options: {
          browsers: ['last 2 version', 'ie 8', 'ie 9']
        },
        src: 'css/styles.css',
        dest: 'css/styles.css'
      },
    },

    watch: {
      sass: {
        files: 'sass/*.scss',
        tasks: ['sass', 'autoprefixer'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['watch']);
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: ["build/*"]
      }
    },
    concat: {
        dist: {
            src: ['src/js/TES.js', 'src/js/userAgent.js'],
            dest: 'build/js/app.js'
        }
    },

    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */\n',
        mangle: false
        },
        dist: {
            files: {
                'build/js/app.min.js': ['<%= concat.dist.dest %>']
            }
        }
    },
    jshint: {
        options: {
            jshintrc: true
        },
        files: {
            src: ['src/**/*.js']
        }
    },
    jasmine: {
        pivotal: {
            src: 'src/**/*.js',
            options: {
                specs: 'tests/**/specs/*Spec.js',
                helpers: 'tests/**/specs/*Helper.js'
            }
        }
    },
    sass: {
      dist: {
        files: {
          'build/css/main.css': 'src/scss/app.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Build task(s).
  grunt.registerTask('default', ['clean:build', 'jshint', 'jasmine',  'concat', 'uglify']);
  grunt.registerTask('styles', ['sass']);
};
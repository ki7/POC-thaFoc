'use strict';

var gulp = require('gulp');
    plugins = require( 'gulp-load-plugins' )();

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(plugins.ghPages());
});
  

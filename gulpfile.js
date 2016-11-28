/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');


var paths = {
    webroot: "./wwwroot/"
};

var config = {
    //Include all js files but exclude any min.js files
    js: [paths.webroot + 'lib/**/*.js', paths.webroot + 'js/*.js', paths.webroot + '!lib/**/*.min.js'],
    css: [paths.webroot + 'lib/**/*.css', paths.webroot + '!lib/**/*.min.css']

}

//delete the output file(s)
gulp.task('clean', function () {
    //del is an async function and not a gulp plugin (just standard nodejs)
    //It returns a promise, so make sure you return that from this task function
    //  so gulp knows when the delete is complete
    return del(['app/all.min.js']);
});

// Combine and minify all files from the app folder
// This tasks depends on the clean task which means gulp will ensure that the 
// Clean task is completed before running the scripts task.
gulp.task('scripts', ['clean'], function () {

    return gulp.src([config.src])
      .pipe(uglify())
      .pipe(concat('all.min.js'))
      .pipe(gulp.dest('app/'));
});

gulp.task('watch', function () {
    return gulp.watch(config.src, ['scripts']);
});

gulp.task('default', function () {
    // place code for your default task here
});

gulp.task('tasks-simple', function () {
    // place code for your default task here
});

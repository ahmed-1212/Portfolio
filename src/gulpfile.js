var gulp = require('gulp'),
    concat = require('gulp-concat'),
    fixer = require('gulp-autoprefixer');

//Concat Css Task
gulp.task('css', () => {

    gulp.src('css/*.css')
    .pipe(fixer('last 2 version'))
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../public/css'))
})

//Concat Js Task
gulp.task('js', () => {

    gulp.src(['js/bootstrap.min.js', 'js/main.js', 'js/typed.min.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../public/js'))
});
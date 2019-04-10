var gulp = require('gulp'),
    concat = require('gulp-concat');

//Concat Css Task
gulp.task('concat', () => {

    gulp.src('style-css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('style-css'))
})

//Concat Js Task
gulp.task('js', () => {

    gulp.src(['js/app.js', 'js/main.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js'))
});
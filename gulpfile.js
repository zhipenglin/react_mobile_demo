const gulp = require('gulp'),
    sass = require('gulp-sass'),
    px2rem = require('gulp-px2rem-transform');

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss', {base: '.'})
        .pipe(sass())
        .pipe(px2rem())
        .pipe(gulp.dest('./'));
});
gulp.task('sass:watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
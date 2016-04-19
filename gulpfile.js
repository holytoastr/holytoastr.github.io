var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

gulp.task('sass', function () {
 return gulp.src('./css/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css/'))
   .pipe(connect.reload());
});

gulp.task('watch', function () {
 gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('default', ['sass', 'connect', 'watch']);

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass({
            "sourcemap=none": true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 version'],
            cascade: false
        }))
    

    .pipe(gulp.dest('./css'));
});
gulp.task('minifycss', function() {
    return gulp.src('./css/*.css')
    .pipe(minifyCSS({keepbreaks:true}))
    .pipe(gulp.dest('./css/min'));
    
});
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['default']);
});
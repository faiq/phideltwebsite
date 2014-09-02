'use strict'; 
var gulp = require('gulp'); 
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var concat = require('gulp-concat');

gulp.task('imagemin', function() {
  var imgSrc = './public/img/**/*',
      imgDst = './public/build/images';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
 
// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./public/css/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/build/css/'));
});

gulp.task('default', ['imagemin',  'styles'])

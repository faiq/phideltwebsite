'use strict'; 
var gulp = require('gulp'); 
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('imagemin', function() {
  var imgSrc = './public/img/**/*',
      imgDst = './public/build/images';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

var minifyHTML = require('gulp-minify-html');
 
// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './views/*.html',
      htmlDst = './views/build';
 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

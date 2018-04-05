let gulp = require('gulp');
let inlinesource = require('gulp-inline-source');

gulp.task('inlinesource', function() {
  let options = {
    compress: false
  };

  return gulp.src('./build/*.html')
    .pipe(inlinesource(options))
    .pipe(gulp.dest('./build'));
});
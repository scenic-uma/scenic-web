const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.']
    }
  });

  gulp.watch([
    '*.html',
    'js/custom.js',
    'css/style.css'
  ]).on('change', reload);
});

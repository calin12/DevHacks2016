var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function(){
  return gulp.src('www')
    .pipe(webserver({
                      port: 9000,
                      host: '0.0.0.0',
                      livereload: true,
                      open: 'http://localhost:9000',
                      proxies: [
                        { source: '/api', target: 'http://localhost:8080/api'}
                      ],
                      fallback: 'index.html'
                    }));
});

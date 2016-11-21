const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

/**  **/
const cssFiles = ['src/css/*.scss', 'src/css/**/*.scss'];
const images = ['src/images/*', 'src/images/**/*'];
const jsFiles = ['src/js/vendor/*.js', 'src/js/*.js'];
const siteRoot = '_site';


gulp.task('images', () =>
    gulp.src(images)
        .pipe(imagemin())
        .pipe(gulp.dest('assets/images'))
);

gulp.task('css', () => {
  gulp.src('src/css/main.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest('assets'))
});

gulp.task("scripts", function() {
  gulp.src(jsFiles)
    .pipe(concat('index.js'))
    .pipe(minify())
    .pipe(gulp.dest('assets'))
});



gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 8000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(cssFiles, ['css']);
  gulp.watch(images, ['images']);
  gulp.watch(jsFiles, ['scripts']);
});


gulp.task('default', ['css', 'images','scripts', 'jekyll', 'serve']);

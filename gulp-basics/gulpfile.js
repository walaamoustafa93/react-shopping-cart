// Top Level Function [ task - src - dest - watch ]

const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sass = gulpSass(require('sass'));

// gulp.task('log', async function () {
//   console.log('Logging !!');
// });

// gulp.task('move', function () {
//   gulp.src('css1/*.css').pipe(gulp.dest('css2'));
// });

// gulp.task('watching', function () {
//   gulp.watch('css1/style.css', async function () {
//     gulp.src('css1/*.css').pipe(gulp.dest('css2'));
//   });
// });

gulp.task('sass', async function () {
  gulp.src('index.scss').pipe(sass().pipe(gulp.dest('css')));
});

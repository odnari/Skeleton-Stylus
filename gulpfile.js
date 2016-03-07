var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

var skeletonStyl = './stylus/skeleton.styl';

gulp.task('stylus', function () {
    gulp.src(skeletonStyl)
        .pipe(sourcemaps.init())
        .pipe(stylus({
            compress: true
        }))
        .pipe(sourcemaps.write('./sourcemap'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch(skeletonStyl, function () {
        gulp.run('stylus');
    });
});
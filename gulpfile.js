var gulp = require('gulp');
var stylus = require('gulp-stylus');

var skeletonStyl = './stylus/skeleton.styl';

gulp.task('stylus', function () {
    gulp.src(skeletonStyl)
        .pipe(stylus({
            compress: true
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch(skeletonStyl, function () {
        gulp.run('stylus');
    });
});
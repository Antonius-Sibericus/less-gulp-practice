'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');
const replace = require('gulp-replace-path');

// gulp.task('less', function () {
//     // return gulp.src(['src/styles/styles.less', 'src/styles/adaptive.less'])
//     return gulp.src('src/styles/styles.less')
//         .pipe(less({
//             paths: [ path.join(__dirname, 'less', 'includes') ]
//         }))
//         // .pipe(concatCss("styles/bundle.css"))
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('dist'));
// });
//
// exports.watch = function () {
//     gulp.watch('src/styles/*.less', gulp.series('less'));
// }

function defaultTask() {
    return gulp.src('src/styles/styles.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        // .pipe(concatCss("styles/bundle.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(replace('../', '../src/'))
        .pipe(gulp.dest('dist'));
}

exports.default = defaultTask
exports.watch = function () {
    gulp.watch('src/styles/*.less', gulp.series('default'));
}
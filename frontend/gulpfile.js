var gulp = require('gulp');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var changed  = require('gulp-changed');
var rename  = require('gulp-rename');

gulp.task('teste', function(){ 
    console.log('funcionou!'); 
});

// Sass & Gulp-Sass
gulp.task('sass', function () {
    gulp.src('./src/sass/index.scss')
        .pipe(sass({compass: true}))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('../dist/css'));
});

// html
gulp.task('html', function(){
	gulp.src('.src/*.html')
	.pipe(gulp.dest('../dist/html'));
});
// Image-min 
gulp.task('jpg', function() {
    gulp.src('./src/img/**/*.jpg')
        .pipe(changed('../dist/img/'))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('../dist/img/'));
});

// Run dev
gulp.task('run', ['sass', 'teste', 'jpg']);

// Gulp Watch
gulp.task('watch', ['run'], function () { 
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});
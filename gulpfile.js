var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.scss') 
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist'));
});

gulp.task('sass:watch', function(){
    gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('pug', function(){
    return gulp.src('src/pug/**/*.pug')
            .pipe(pug({pretty: true}))
            .pipe(gulp.dest('dist'));
});

gulp.task('pug:watch', function(){
    gulp.watch('src/pug/*', ['pug']);
});


gulp.task('default', ['sass:watch', 'pug:watch']);
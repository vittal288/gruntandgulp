var gulp = require('gulp');
     sass = require('gulp-sass');
     autoprefixer = require('gulp-autoprefixer');

// Styles
gulp.task('styles', function() {
    gulp.src('sass/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
        .pipe(gulp.dest('css'));
});

// Watch the sass files
gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('default', ['styles']);

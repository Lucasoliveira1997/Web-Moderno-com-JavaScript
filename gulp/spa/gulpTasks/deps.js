const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')

    
})

gulp.task('deps.fonts', () => {
    
})
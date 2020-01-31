const gulp = require('gulp')
const ts = require('gulp-typescript')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    return tsProject.src()    
        .pipe(tsProject())
        .pipe(uglify())
        .pipe(concat('result.min.js'))
        .pipe(gulp.dest('build'))
})
const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app.js')
require('./gulpTasks/deps.js')
require('./gulpTasks/servidor.js')

gulp.task('default', () => {
    if(util.env.production) {
        sequence('deps', 'app')
        // gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})
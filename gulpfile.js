// grab our gulp packages
const {src, dest, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));


function mytask(callback) {
    callback();
}

exports.mytask = mytask;


function copy(cb) {
    src('source/javascript/*.js')
        .pipe(dest('public/assets/javascript'));
    cb();
}

exports.copy = copy;

function compileCSS(cb) {
    src('./source/scss/*.scss')
        .pipe(sass().on('error', function () {
            console.log('error')
        }))
        .pipe(dest('public/assets/stylesheets'));
    cb();
}

exports.css = compileCSS;

function watchFiles(cb) {
    watch('./source/scss/*.scss', compileCSS);
    watch([ 'source/javascript/*.js', '!node_modules/**'],copy);
}

exports.watch = watchFiles;

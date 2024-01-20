const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin'); 


function styles(){
    return gulp.src('./src/styles/*.scss')//=> RECUPERAR TODOS OS ARQUIVOS COM EXTENSÃO .SCSS
        .pipe(sass({outputStyle: 'compressed'}))//=> A SAIDA DOS ARQUIVOS SERÁ DE FORMA COMPRENSADA
        .pipe(gulp.dest('./dist/css'))//=> OS ARQUIVOS COMPRENSADOS SERÁ ENVIADOS PARA A PASTA DE DESTINO ./dist/css
}

function images(){
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles,images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
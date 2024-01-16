const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function styles(){
    return gulp.src('./src/styles/*.scss')//=> RECUPERAR TODOS OS ARQUIVOS COM EXTENSÃO .SCSS
        .pipe(sass({outputStyle: 'compressed'}))//=> A SAIDA DOS ARQUIVOS SERÁ DE FORMA COMPRENSADA
        .pipe(gulp.dest('./dist/css'))//=> OS ARQUIVOS COMPRENSADOS SERÁ ENVIADOS PARA A PASTA DE DESTINO ./dist/css
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
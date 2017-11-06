const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

gulp.task('builddev', ['buildprod'], () => {
    //开发环境。主要是监听到文件的变化，自动编译
    return watch('./src/node/**/*.js', {
        ignoreInitial: true
    }, () => {
        gulp.src('./src/**/*.js')
            .pipe(babel({
                babelrc: false,
                plugins: [
                    "transform-es2015-modules-commonjs" //专门编译import
                ]
            }))
            .pipe(gulp.dest('./build/'))
    });
})

gulp.task('buildprod', () => {
    //直接编译
    gulp.src('./src/**/*.js')
        .pipe(babel({
            //如果不设置成false，会使用外面的babelrc；外面的babelrc是给webpack用的
            babelrc: false,
            plugins: [
                "transform-es2015-modules-commonjs" //专门编译import
            ]
        }))
        .pipe(gulp.dest('./build/'))
})

gulp.task('default', [process.env.NODE_ENV === "production" ? "buildprod" : "builddev"]);
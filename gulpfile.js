const gulp = require("gulp");
const sass = require("gulp-sass");
const cssmin = require("gulp-clean-css");
const concat = require("gulp-concat")
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const webserver = require("gulp-webserver")
const { readFileSync } = require("fs");
const url = require("url")
const { join } = require("path")
    //压缩css
gulp.task("devcss", () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat("all.css"))
        .pipe(gulp.dest("./src/list/css"))
})
gulp.task('devjs', () =>
    gulp.src('./src/js/**/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/list/js'))
);
gulp.task("watch", () => {
    return gulp.watch(["./src/scss/**/*.scss", './src/js/**/*.js'], gulp.series("devcss", "devjs"))
})

gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(webserver({
            port: 8080,
            livereload: true,
            open: true,
            middleware: ((req, res, next) => {
                let { pathname } = url.parse(req.url, true)
                if (pathname === "/favicon.ico") {
                    return res.end("")
                }
                pathname = pathname == "/" ? "index.html" : pathname;
                if (pathname == "api") {
                    res.end(JSON.stringify({ code: 0 }))
                } else {
                    res.end(readFileSync(join(__dirname, "src", pathname)))
                }
            })
        }))
})
gulp.task("default", gulp.series("devcss", "devjs", "server", "watch"))
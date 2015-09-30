var ts = require("gulp-typescript");
var gulp = require("gulp");

gulp.task('default', function () {
    var tsResult = gulp.src('service/**/*.ts').pipe(ts({"module": "commonjs"}));
    return tsResult.js.pipe(gulp.dest('bin/service'));
});

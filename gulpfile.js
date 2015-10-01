var ts = require("gulp-typescript");
var gulp = require("gulp");

gulp.task('default', function () {
    var tsResult = gulp.src('service/**/*.ts').pipe(ts({
        "module": "commonjs",
        "target": "ES5"
    }));
    return tsResult.js.pipe(gulp.dest('bin/service'));
});

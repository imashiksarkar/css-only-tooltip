const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
function buildStyles() {
  return src(`src/sass/**/*.scss`)
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest(`src/css`));
}

function watchTask() {
  watch([`src/sass/**/*.scss`], buildStyles);
}

exports.default = series(buildStyles, watchTask);

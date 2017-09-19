"use strict";

// grab our gulp packages
var gulp = require("gulp"),
  jshint = require("gulp-jshint"),
  gutil = require("gulp-util"),
  concat = require("gulp-concat"),
  livereload = require("gulp-livereload"),
  del = require("del"),
  compass = require("gulp-compass"),
  sourcemaps = require("gulp-sourcemaps"),
  autoprefixer = require("gulp-autoprefixer"),
  http = require("http"),
  st = require("st"),
  sass = require("gulp-sass");

function errorlog(err) {
  console.log("--- +++  ERROR  +++ ---");
  console.log("Error: " + err);
  console.log("Message: " + err.message);
  console.log("");
}

// configure the jshint task
gulp.task("jshint", function() {
  return gulp
    .src("./app/js/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"));
});

gulp.task("html", function() {
  gulp.src("./app/**/*.html"); //.pipe(livereload());
});

gulp.task("build-js", function() {
  return (gulp
      .src("./app/js/**/*.js")
      // .pipe(sourcemaps.init())
      .pipe(concat("app.min.js"))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === "production" ? uglify() : gutil.noop())
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest("./app/js/")) );
  //   .pipe(livereload()) );
});

gulp.task("build-css", function() {
  return gulp
    .src("./app/assets/sass/application.scss")
    .pipe(sass())
    .pipe(gulp.dest("public/assets/stylesheets"));
  // .pipe(livereload());
});

var compass_options = {
  config_file: "config.rb",
  css: "app/css",
  sass: "app/assets/sass",
  maps: "app/assets/maps",
  sourcemap: true
};

// ////////////////////////////////////////////////
// COMPASS Tasks
// /////////////////////////////////////////////// //compressed
gulp.task("compass", function() {
  gulp
    .src("./app/assets/sass/application.scss")
    .pipe(compass(compass_options))
    .on("error", errorlog)
    .pipe(
      autoprefixer({
        browsers: ["last 3 versions"],
        cascade: false
      })
    )
    //.pipe(minifyCSS())
    .pipe(gulp.dest(compass_options.css))
    .on("error", errorlog)
    .pipe(sourcemaps.write(compass_options.maps))
    // .pipe(livereload())
    .on("end", function() {
      console.log('"Compass" task complete');
    });
});

// clean out all files and folders from build folder
gulp.task("clean", function(cb) {
  del(["./build/**"], cb);
});

gulp.task("copy", ["clean"], function() {
  gulp
    .src(["app/**/*/", "!app/**/*.db"])
    .pipe(gulp.dest("./build/"))
    .pipe(livereload());
});

// configure which files to watch and what tasks to use on file changes
gulp.task("watch", ["server"], function() {
  livereload.listen({ basePath: "./build/" });
  gulp.watch("./app/views/**/*.html", ["html"]);
  gulp.watch("./app/js/**/*.js", ["build-js"]);
  gulp.watch("./app/assets/**/*.*", ["build-css"]);
});

gulp.task("server", function(done) {
  http
    .createServer(
      st({ path: __dirname + "/build", index: "index.html", cache: false })
    )
    .listen(3000, done);
});

// define the default task and add the watch task to it
gulp.task("default", ["watch"]);

gulp.task("start", [
  "build-js",
  "compass",
  "copy",
  "build-js",
  "server",
  "watch"
]);

'use strict';
// ////////////////////////////////////////////////
//
// EDIT CONFIG OBJECT BELOW !!!
// 
// jsConcatFiles => list of javascript files (in order) to concatenate
// buildFilesFoldersRemove => list of files to remove when running final build
// // /////////////////////////////////////////////

var config = {
    jsConcatFiles: [
        './app/js/**/*'
        //  './app/js/main.js'
    ],
    buildFilesFoldersRemove: [
        //'build/css/!(application.css)',
        //'build/js/!(*.min.js)',
        'build/assets/',
        'build/bower.json',
        'build/bower_components/',
        'build/maps/'
    ]
};


// ////////////////////////////////////////////////
// Required taskes
// gulp build
// bulp build:serve
// // /////////////////////////////////////////////

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    path = require('path'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    livereload = require('gulp-livereload');


// ////////////////////////////////////////////////
// Log Errors
// // /////////////////////////////////////////////

function errorlog(err) {
    console.log('--- +++  ERROR  +++ ---');
    console.log('Error: ' + err);
    console.log('Message: ' + err.message);
    console.log('');
    //this.emit('end');
}


// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////

gulp.task('scripts', function() {
    return gulp.src(config.jsConcatFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('temp.js'))
        .pipe(uglify())
        .on('error', errorlog)
        .pipe(rename('app.min.js'))   
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./app/js/'))

    .pipe(reload({
        stream: true
    }));
});


// ////////////////////////////////////////////////
// Styles Tasks
// /////////////////////////////////////////////// //compressed  / expanded

gulp.task('styles', function() {
    gulp.src('./app/scss/application.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', errorlog)
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('app/css'))
        .pipe(reload({
            stream: true
        }));
});


var compass_options = {
    config_file: 'config.rb',
    css: 'app/css',
    sass: 'app/assets/sass',
    maps: 'app/assets/maps',
    sourcemap: true,
}

// ////////////////////////////////////////////////
// COMPASS Tasks
// /////////////////////////////////////////////// //compressed
gulp.task('compass', function() {
    gulp.src('./app/assets/sass/application.scss')
        .pipe(compass(compass_options))
        /*.pipe(plumber({
          errorHandler: function (error) {
            console.log(error.message);
            //this.emit('end');
        }}))*/
        .on('error', errorlog)
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        //.pipe(minifyCSS())
        .pipe(gulp.dest(compass_options.css))
        .on('error', errorlog)
        .pipe(sourcemaps.write(compass_options.maps))
        .pipe(livereload())
        .on('end', function() {
            console.log('"Compass" task complete');
        });
});

// ////////////////////////////////////////////////
// HTML Tasks
// // /////////////////////////////////////////////

gulp.task('html', function() {
    gulp.src('app/**/*.html')
        .pipe(livereload());
});


// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./build/"
        }
    });
});

// task to run build server for testing final app
gulp.task('build:serve', function() {
    browserSync({
        server: {
            baseDir: "./build/"
        }
    });
});


// ////////////////////////////////////////////////
// Build Tasks
// // /////////////////////////////////////////////

// clean out all files and folders from build folder
gulp.task('build:cleanfolder', function(cb) {
    del([
        'build/**'
    ], cb);
});

// task to copy VENDOR CSS files to css folder
gulp.task('copy:Vendors', function() {
    return gulp.src('app/assets/sass/vendor/**/*')
        .pipe(gulp.dest('app/css/vendor'));
});


// task to create build directory of all files
gulp.task('build:copy', function() { //['copy:Vendors','build:cleanfolder'],
    return gulp.src(['app/**/*/', '!app/**/*.db'])
        .pipe(gulp.dest('build/'));
});

// task to removed unwanted build files
// list all files and directories here that you don't want included
gulp.task('build:remove', ['build:copy'], function(cb) {
    del(config.buildFilesFoldersRemove, cb);
});

gulp.task('build', ['build:copy', 'build:remove']);


// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////

gulp.task('watch', function() {
    gulp.watch('app/assets/**/*.*', ['compass']);
    gulp.watch('app/views/**/*.html', ['html']);
    gulp.watch('app/js/**/*.js', ['scripts']);
    livereload.listen();
});

// ////////////////////////////////////////////////
// Tasks
// // /////////////////////////////////////////////

//gulp.task('connect', ['connect', 'watch']);

gulp.task('default', ['compass', 'html', 'build']);

gulp.task('start', ['compass', 'scripts', 'html', 'build', 'browser-sync', 'watch']);

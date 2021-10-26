var { src, dest, series, parallel, watch } = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Builds the website using eleventy
function eleventy(cb) {
    exec('npx @11ty/eleventy --input=src --output=dist', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

// Builds all the styles using gulp-sass
function styles(cb) {
    return src('./src/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./dist/styles'));
    cb();
}

// Compiles all scripts
function scripts(cb) {
    return src('src/scripts/**/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(dest('dist/scripts'));
    cb();
}

// Optimizes and copies over all media
function media(cb) {
    return src('src/images/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/images/'));
    cb();
}

// Copies over all fonts
function fonts(cb) {
    return src('src/fonts/**/*')
        .pipe(dest('dist/fonts/'));
    cb();
}

// Watches for changes and runs the appropriate task
function develop(cb) {
    watch('src/styles/**/*.{css,scss}', { events: 'all' }, styles);
    watch('src/scripts/**/*.{js}', { events: 'all' }, scripts);
    watch('src/**/*.{html,md,yml,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jstl}', { events: 'all' }, series(eleventy, reload));
    watch('src/images/**/*', { events: 'all' }, series(media));
    watch('src/fonts/**/*', { events: 'all' }, series(fonts));
    cb();
}

// Initializes browser sync and serves files
function serve(cb) {
    browserSync.init({
        directory: true,
        watch: true,
        server: {
            baseDir: "dist"
        }
    });
    cb();
}

// Reloads browser sync
function reload(cb) {
    browserSync.reload();
    cb();
}

// Tasks
exports.eleventy = eleventy;
exports.styles = styles;
exports.scripts = scripts;
exports.media = media;
exports.fonts = fonts;
exports.develop = develop;
exports.serve = serve;

// Monotasks
// Build - Compiles all files
exports.build = series(eleventy, styles, scripts, media, fonts);
// Default - Compiles all files, watches for file changes, starts local server
exports.default = series(eleventy, styles, scripts, media, fonts, parallel(develop, serve));

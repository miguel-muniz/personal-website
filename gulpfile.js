var { src, dest, series, parallel, task, watch } = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var cssimport = require('postcss-import');
var cssnested = require('postcss-nested');
var purgecss = require('postcss-purgecss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Builds the website using eleventy
function eleventy(cb) {
    exec('npx @11ty/eleventy --input=src --output=dist', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
}

// Builds all the styles using postcss
function styles(cb) {
    var plugins = [
        cssimport(),
        cssnested(),
        tailwindcss(),
        autoprefixer(),
        // purgecss({
        // 	content: ['./**/*.{html,hbs}']
        // }),
        cssnano(),
    ];
    return src('./src/styles/main.{css,scss}')
        .pipe(postcss(plugins))
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
    cb();
}

// Watches for changes and runs the appropriate task
function develop(cb) {
    watch('src/styles/**/*.{css,scss}', { events: 'all' }, styles);
    watch('tailwind.config.js', { events: 'all' }, styles);
    watch('src/scripts/**/*.{js}', { events: 'all' }, scripts);
    watch('src/**/*.{html,md,yml,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug,jstl}', { events: 'all' }, series(eleventy, reload));
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
exports.develop = develop;
exports.serve = serve;

// Monotasks
// Build - Compiles all files
exports.build = series(eleventy, styles, scripts);
// Default - Compiles all files, watches for file changes, starts local server
exports.default = series(eleventy, styles, scripts, parallel(develop, serve));

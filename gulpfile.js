var { src, dest, series } = require('gulp');
var exec = require('child_process').exec;
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');
var cssimport = require('postcss-import');
var cssnested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Initializes browser sync and serves files
function serve(cb) {
	browserSync.init({
		watch: true,
		server: {
			baseDir: "dist"
		}
	});
}

// Builds all the styles using post-css
function styles(cb) {
	var plugins = [
		cssimport(),
		cssnested(),
		tailwindcss(),
		// autoprefixer(),
		// cssnano(),
	];
	return src('./src/styles/main.css')
		.pipe(postcss(plugins))
		.pipe(dest('./dist/styles'));
}

// Compiles all scripts
function scripts(cb) {

}

// Optimizes and copies over all media
function media(cb) {

}

// Builds the website using eleventy
function build(cb) {
	exec('npx @11ty/eleventy --input=src --output=dist', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
}

// Exporting tasks
exports.build = build;
exports.serve = serve;
exports.styles = styles;
exports.scripts = scripts;
exports.media = media;
exports.default = series(build, styles);

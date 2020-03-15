var { gulp, src, dest, series } = require('gulp');
var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;

function serve(cb) {
	browserSync.init({
		watch: true,
		server: {
			baseDir: "dist"
		}
	});
}


function build(cb) {
	exec('npx @11ty/eleventy --input=src --output=dist', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
}

exports.build = build;
exports.serve = serve;
exports.default = series(build);
// #######################################################
// Modules
// #######################################################

var gulp = require('gulp');
var notify = require("gulp-notify");
var php2html = require("gulp-php2html");
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

// #######################################################
// Tasks
// #######################################################

// All the tasks that should run
gulp.task('default', ['start', 'php2html', 'php2html-pages', 'sass', 'watch']);

gulp.task('start', function() {
	// Notify that Gulp is starting
	console.log("\nGulp is starting. Compiling .php and .sass files...")
});

gulp.task('watch', function() {
	// Notify that watching has started
	console.log("\nGulp finished starting. Now watching for changes...")
	// Watch for these file types then execute a task
	gulp.watch('*.php', ['php2html']);
	gulp.watch('page/**/*.php', ['php2html-pages']);
	gulp.watch('css/main.scss', ['sass']);
});


gulp.task('php2html', function() {
	// Compile project/_build/*.php to project/*.html
	gulp.src("*.php")
	    .pipe(php2html())
	    .pipe(gulp.dest("../"));
	console.log("\nRan php2html. .php files were compiled to .html.")
});

gulp.task('php2html-pages', function() {
	// Compile project/_build/page/**/*.php to projct/page/**/*.html
	gulp.src("page/**/*.php")
	    .pipe(php2html())
	    .pipe(gulp.dest("../page/"));
	console.log("\nRan php2html-pages. .php page files were compiled to .html.")
});

gulp.task('sass', function() {
	// Combile project/_build/css/main.scss to project/css/main.css
	gulp.src("css/main.scss")
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest("../css/"));
	console.log("\nRan sass. .scss files were compiled to .css.")
});

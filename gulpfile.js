const url = {
	src: 'src/',
	dist: 'dist/',
	js: 'js/',
	pug: 'pug/',
	css: 'css/',
	stylus: 'stylus/',
	images: 'images/',
	virtualDomain: 'http://test/'
};
const port = 8888;
const virtualDomainMode = false;
const phpMode = false;


// gulp
const gulp = require('gulp');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');


// tasks
gulp.task('default', ['browser-sync', 'pug', 'sass', 'stylus', 'js', 'watch']);

gulp.task('watch', () => {
	gulp.watch(['./src/stylus/**'], () => {
		gulp.start(['stylus']);
	});
	gulp.watch(['./src/sass/**'], () => {
		gulp.start(['sass']);
	});
	gulp.watch(['./src/pug/**'], () => {
		gulp.start(['pug']);
	});
});

// Browser display
const browserSync = require("browser-sync");

gulp.task('browser-sync', () => {
	browserSync({
		server: {
			baseDir: "./dist" // *ルート
		}
	});
	gulp.watch("./js/**/*.js", ['reload']);
	gulp.watch("./*.html", ['reload']);
});

gulp.task('reload', () => {
	browserSync.reload();
});


// compile [pug]
const pug = require('gulp-pug');
const pugOptions = {
	pretty: true
}

gulp.task('pug', () => {
	gulp.src(['./src/pug/**/*.pug', '!./src/pug/**/_*.pug'])
		.pipe(plumber())
		.pipe(pug(pugOptions))
		.pipe(gulp.dest('./dist/'));
});


// compile [stylus]
const stylus = require('gulp-stylus');

gulp.task('stylus', () => {
	gulp.src(['./src/stylus/**/*.styl', '!./src/stylus/**/_*.styl'])
		.pipe(plumber())
		.pipe(stylus())
		.pipe(gulp.dest('./dist/css/'))
});


// compile [sass]
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassOptions = {
	outputStyle: 'expanded'
}

gulp.task('sass', function () {
	gulp.src(['./src/sass/**/*.scss', '!./src/sass/**/_*.scss'])
		.pipe(sass())
		.pipe(plumber())
		.pipe(sass(sassOptions))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dist/css/'))
});


// Js
const uglify = require("gulp-uglify");

gulp.task('js', () => {
	gulp.src(["./src/js/*.js"])
		.pipe(uglify())
		.pipe(gulp.dest("./dist/js/"))
});
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	postcss = require('gulp-postcss'),
	mqPacker = require('css-mqpacker'),
	sortMQ = require('sort-css-media-queries'),
	sourcemaps = require('gulp-sourcemaps'),
	postcss = require('gulp-postcss'),
	browserSync = require('browser-sync'),
	image = require('gulp-image');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([
				mqPacker({
					sort: sortMQ
				})
			]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('pug', function() {
	return gulp.src('app/templates/pages/*.pug')
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest('dist'))
	// .pipe(browserSync.reload());
})

gulp.task('img', function(){
	return gulp.src('app/img/**/*.{png,jpg}')
		.pipe(image())
		.pipe(gulp.dest('dist/img'))

});

gulp.task('js', function() {
	return gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'));
});



gulp.task('font', function(){
	return gulp.src('app/font/**/*')
	.pipe(gulp.dest('dist/font'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir:'dist'
		},
		notify: false
	});



	gulp.watch('app/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('app/templates/**/*.pug', gulp.series('pug'))
		.on('change', browserSync.reload);
	gulp.watch('app/js/**/*.js', gulp.series('js'))
		.on('change', browserSync.reload);
});

gulp.task('watch', gulp.series('pug', 'sass', 'img', 'font', 'js', 'browser-sync'));


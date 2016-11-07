
var gulp = require('gulp');

var less = require('gulp-less');

var rev = require('gulp-rev');

var imagemin = require('gulp-imagemin');

var rename = require('gulp-rename');

var useref = require('gulp-useref');

var gulpif = require('gulp-if');

var uglify = require('gulp-uglify');

var revCollector = require('gulp-rev-collector');

// 处理css任务
gulp.task('css', function () {

	return gulp.src('./public/less/main.less')
		.pipe(less())
		.pipe(rev())
		.pipe(gulp.dest('./release/public/css'))
		.pipe(rev.manifest())
		.pipe(rename('css-manifest.json'))
		.pipe(gulp.dest('./release/rev'));

});

// 处理图任务
gulp.task('image', function () {

	return gulp.src(['./public/images/**/*', './uploads/*'], {base: './'})
		.pipe(imagemin())
		.pipe(rev())
		.pipe(gulp.dest('./release'))
		.pipe(rev.manifest())
		.pipe(rename('image-manifest.json'))
		.pipe(gulp.dest('./release/rev'));
});

// 处理js
gulp.task('useref', function () {

	return gulp.src('./index.html')
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.js', rev()))
		.pipe(gulp.dest('./release'))
		.pipe(rev.manifest())
		.pipe(rename('js-manifest.json'))
		.pipe(gulp.dest('./release/rev'));

});

// 内容替换
gulp.task('rev', ['css', 'image', 'useref'], function () {

	gulp.src(['./release/rev/*.json', './release/index.html'], {base: './release'})
		.pipe(revCollector())
		.pipe(gulp.dest('./release'));

});

// 其它任务
gulp.task('other', function () {

	gulp.src(['./api/*', './public/fonts/*', './public/libs/*', './views/*.html'], {base: './'})
		.pipe(gulp.dest('./release'));

});

gulp.task('default', ['rev', 'other']);
var gulp = require('gulp');

gulp.task('copy', function() {
	gulp.src('bower_components/angular/angular.js')
	.pipe(gulp.dest('public/js/vendor/angular/'));

	gulp.src('bower_components/firebase/firebase.js')
	.pipe(gulp.dest('public/js/vendor/firebase/'));

	gulp.src('bower_components/angularfire/dist/angularfire.js')
	.pipe(gulp.dest('public/js/vendor/angularfire/'));

	gulp.src('bower_components/jquery/dist/jquery.js')
	.pipe(gulp.dest('public/js/vendor/jquery/'));
});
//pidkl gulp
var gulp = require('gulp'),
	//>>> npm i gulp-sass --save-dev
	//pidkl paket sass
	sass = require('gulp-sass'),
	/*b3*/
	browserSync = require('browser-sync');
	
gulp.task('browser-sync', function(){
	//na scenu vyh browsersync
	browserSync({
		server: {
			baseDir: 'app'
		},
		//vidkl povidomlennia pro to sho is connected
		notify:false

	});
});
	/*e3*/





	//taski po4 z gulp.
	//..2)
	//установимо САСС любі пакети для задач легко гугляться
	
	gulp.task('sass', function() {
		// body...
		//berem joho
		return gulp.src('app/sass/**/*.sass')//usi sass faily z papki sass
		//return gulp.src(['!app/sass/main.sass', 'app/sass/**/*.sass'])//usi krim odnoho sho po4 na !
		//return gulp.src('app/sass/*.+(sass|scss)')//usi scss faily i sass faily



		.pipe(sass())
		//dest bez gulp na pyshetsa. dest tiki papki,
		.pipe(gulp.dest('app/css'))
	});
	//>>> gulp sass - zapuskaje tasku sass i kompiliuje css z sass faila
	gulp.task('watch', function () {
		// body...
		//tak jak w src po shablonu vybr faily

		//4erez komu masiv taskiv jaki my budem vykonuvaty
		gulp.watch('app/sass/**/*.sass', ['sass']);
	});



	/*
gulp.task('mytask', function () {
	// body...

	//..1)це те що було на початку
	//console.log('Pryvit Ja task');
	//src dozvoliae vykl napriamu
	//1. БЕРЕМО ФАЙЛ
	return gulp.src('source-files')
	///mozzna i bez perenosu na novu stroku
	//2. ЩОСЬ РОБИМО З НИМ
	.pipe(plugin())
	//destination kuda v papku folder
	//3. ВИВОДИМО КУДИСЬ РЕЗУЛЬТАТ

	.pipe(gulp.dest('folder'))

})
	/*1.2.3. це база.*/





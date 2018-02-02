import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

gulp.task('browser', (cb)=>{
	if(!args.watch) return cb();

	// 监听的文件夹 执行tasks=>scripts.js ...
	gulp.watch('app/**/*.js', ['scripts']);
	gulp.watch('app/**/*.ejs', ['pages']);
	gulp.watch('app/**/*.css', ['css']);
});


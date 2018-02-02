import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//创建任务
gulp.task('pages', ()=>{
	return gulp.src('app/**/*.ejs')
	// 复制到这个文件下
	.pipe(gulp.dest('server'))
	.pipe(gulpif(args.watch, livereload()))
})


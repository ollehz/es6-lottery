import gulp from 'gulp';
//用于if判断
import gulpif from 'gulp-if';
//处理文件拼接
import concat from 'gulp-concat';
//打包过程
import webpack from 'webpack';
//文件流
import gulpWebpack from 'webpack-stream';
//文件重命名 标识
import named from 'vinyl-named';
//热更新 自动更新
import livereload from 'gulp-livereload';
//处理文件信息流
import plumber from 'gulp-plumber';
//文件重命名
import rename from 'gulp-rename';
//处理压缩js和css
import uglify from 'gulp-uglify';
import {log, colors} from 'gulp-util';
//对命令行参数解析的包(自己写的)
import args from './util/args';

//创建任务
gulp.task('scripts', ()=>{
	return gulp.src(['app/js/index.js'])
	.pipe(plumber({
		errorHandle: function(){

		}
	}))
	.pipe(named())
	.pipe(gulpWebpack({
		module: {
			loaders: [{
				test: /\.js$/,
				//loader: babel 会报错
				loader: 'babel-loader'
			}]
		}
	}),null, (err,states)=>{
		log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
			chunks: false
		}))
	})
	//编译后的存放的路径
	.pipe(gulp.dest('server/public/js'))
	//复制
	.pipe(rename({
		basename: 'cp',
		extname: '.min.js'
	}))
	//压缩
	.pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
	//存贮的命令
	.pipe(gulp.dest('server/public/js'))
	//自动刷新
	.pipe(gulpif(args.watch, livereload()))
})


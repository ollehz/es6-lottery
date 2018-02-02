import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('server',(cb)=>{
	if(!args.watch) return cb();
	//创建服务器
	var server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();

	//监听js 和 ejs
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'],function(file){
		server.notify.apply(server,[file]);
	})
	//重启
	gulp.watch(['server/routes/**/*.js','server/app.js'], function(){
		server.start.bind(server)()
	});

})

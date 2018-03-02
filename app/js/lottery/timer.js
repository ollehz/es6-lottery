/*
	倒计时
*/
class Timer{
	countdown(end, update, handle){
		const now = Date().getTime(); //取当前时间
		const self = this; // 获取当前对象的指针
		if(now - end){  
			// 倒计时结束
			handle.call(self);
		} else {
			// 倒计时 还没结束
			let last_time = end - now;
			const px_d = 1000*60*60*24;
			const px_h = 1000*60*60;
			const px_m = 1000*60;
			const px_s = 1000;
			let d = Math.floor(last_time/px_d);
		}
	}
}
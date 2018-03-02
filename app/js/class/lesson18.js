{
	console.log('-----模块化-----');

}

{
	/*
		模块引入 import
		模块导出 export
	*/
}


	let A = 123;
	let test = function(){
		console.log('test');
	};
	class Hello{
		test(){
			console.log('class');
		}
	};
	// 推荐
	export default {
		A,
		test,
		Hello
	}

{
	console.log('-----函数 参数默认值-----');
	// 有默认值的  要放在最后
	function test(x, y='world'){
		console.log('函数参数默认值', x, y);
	}
	test('hello');
	test('hello', 'javascript');
}

{
	console.log('-----函数 作用域-----');
	let x = 'test';
	function test2(x, y=x){
		console.log('作用域', x, y);
	}
	test2();
	test2('nice'); 

	function test3(c, y=x){
		console.log('作用域', c, y);
	}
	test3();
}

{
	console.log('-----reset 参数-----');
	// rest参数后面 不能有其它参数
	function test4(...arg){
		for(let v of arg){
			console.log('rest', v);
		}
	}
	test4(1,2,3,4,'a');
}

{
	console.log('----- ...符号 -----');
	console.log(...[1,2,4]);
	console.log('a', ...[1,2,3]);
}

{
	console.log('----- 箭头函数 -----');
	// 没有参数用() 代替，只有一个参数可以省略()
	// 箭头后面是 执行语句
	let arrow = v => v*2;
	console.log('arrow', arrow(3));
}

{
	console.log('-----尾调用-----');
	// 函数的最后一句话 是函数
	// 用于提升性能
	function tail(x){
		console.log('tail', x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);
}
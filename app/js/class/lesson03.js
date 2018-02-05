{
	let regex = new RegExp('xyz', 'i');
	let regex2 = new RegExp(/xyz/i);

	console.log(regex.test('xyz123'), regex2.test('xyz123'));
	//es6 第二个参数会改变第一个参数的 修饰符
	let regexp3 = new RegExp(/xyz/gi, 'i');
	console.log(regexp3.flags);
}

{
	console.log('-----y 修饰符 -----');
	let s = "bbb_bb_b";
	let a1 = /b+/g;
	let a2 = /b+/y;
	/*都是全局匹配，y强调第一个字符必须匹配成功而g不是的*/
	console.log('one', a1.exec(s), a2.exec(s));
	console.log('two', a1.exec(s), a2.exec(s));

	console.log(a1.sticky, a2.sticky);
}

{
	console.log('-----u 修饰符 -----');
	/*
		用来处理大于\uFFFF的Unicode字符
		会处理四个字符的UTF-16编码
		. 不能匹配所有字符 只能是2个字节的
	*/
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); 	 //es5中不支持四个字节的UTF-16编码
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));  //es6中会识别成一个字符

	console.log('noU ' + /\u{61}/.test('a'));
	console.log('U ' + /\u{61}/u.test('a'));
}
{
	/*Unicode编码*/
	console.log('a', `\u0061`);
	// 0xFFFF
	console.log('str', `\u20bb7`);

	console.log('str', `\u{20bb7}`);
}

{
	let s = '𠮷';
	//es5
	console.log('length: ', s.length);
	console.log('0 ', s.charAt(0));
	console.log('1 ', s.charAt(1));
	console.log('un-01 ', s.charCodeAt(0));  //2个字节
	console.log('un-02 ', s.charCodeAt(1));

	//es6 取码值
	console.log('----- es6 -----');
	let s1 = '𠮷a';
	console.log('length: ', s1.length);
	console.log('code0 ', s1.codePointAt(0)); //4个字节
	console.log('code0 ', s1.codePointAt(0).toString(16));
	console.log('code1 ', s1.codePointAt(1));
	console.log('code2 ', s1.codePointAt(2));

}

{
	console.log('----- Unicode 码值变文字 -----');
	//es5 码值 变 文字
	console.log(String.fromCharCode('0x20BB7'));
	//es6 码值 变 文字
	console.log(String.fromCodePoint('0x20BB7'));
}

{
	console.log('-----文字遍历器-----');
	let str = '\u{20bb7}abc';
	//es5
	for(let i=0; i<str.length; i++){
		console.log('es5 ', str[i]);
	}
	console.log('----- es6 -----');
	for(let code of str){
		console.log('es6 ', code);
	}
}

{
	let str = "string";
	//判断字符串是否有某个字符
	console.log('includes ', str.includes('s'));
	//判断以某个字符 起始的
	console.log('startsWith ', str.startsWith('str'));
	//判断以某个字符 结尾的
	console.log('endsWith ', str.endsWith('ing'));
}

{	
	let str = 'abc';
	//重复字符串次数
	console.log(str.repeat(2));
}

{
	console.log('-----字符串模板-----');
	let name = 'js-es6';
	let info = 'hello world';
	let s = `i am ${name}, ${info}`;
	console.log(s);
}

{
	console.log('-----es7 俩方法-----');
	//padStart('返回字符串长度'，部位数字);
	// 前补
	console.log('1'.padStart(2, '0'));
	// 后补
	console.log('1'.padEnd(2, '0'));
}

{
	console.log('-----字符串 标签模板-----');
	let user = {
		name: 'list',
		info: 'hello world'
	};
	console.log(abc`i am ${user.name}, ${user.info}`);
	function abc(s, v1, v2){
		console.log(s, v1, v2);
		return s + v1 + v2;
	}

}

{
	console.log('-----raw-----');
	console.log(String.raw`Hi\n${1+2}`);
	console.log(`Hi\n${1+2}`);
}

{
	console.log('##对象扩展##');
}

{
	console.log('-----简洁表达-----');
	let o = 1;
	let k = 2;
	let es5 = {
		o: o,
		k: k
	};
	// 
	let es6 = {
		o,
		k
	}
	console.log(es5, es6);

	let es5_method = {
		hello: function(){
			console.log('hello~ES5');
		}
	};
	let es6_method = {
		hello(){
			console.log('hello~ES6');
		}
	};
	console.log(es5_method.hello(), es6_method.hello());
}

{
	console.log('-----属性表达式-----');
	let a = 'b';
	let es5_obj = {
		a: 'c',
		b: 'c'
	};

	let es6_obj = {
		//[表达式]
		[a]: 'c'
	};

	console.log(es5_obj, es6_obj);
}

{
	console.log('-----新增 常用api -----');
	console.log('字符串', Object.is('abc', 'abc'), 'abc'==='abc');
	// 引用的地址 不同
	console.log('数组', Object.is([], []), []===[]); 
	// 浅拷贝 只有自身对象有的属性
	console.log('拷贝', Object.assign({a:'a'},{b:'b'}));
	//
	let test = {k:123,o:456};
	for(let [key, value] of Object.entries(test)){
		console.log([key, value]);
	}
}

/*{
	console.log('-----扩展运算符-----');
	let {a,b,...c} = {a:'test',b:'javasdript',c:'ddd',d:'cccc'};
	c = {
		c: 'ddd',
		d: 'cccc'
	}
}*/
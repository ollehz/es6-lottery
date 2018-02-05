{
	let a,b,rest;
	[a,b] = [1,2];
	console.log(a,b);
}

{
	let a,b,reset;
	[a,b,...reset] = [1,2,3,4,5];
	console.log(a,b,reset);
}

{
	console.log('-----对象-----')
	let a,b;
	// 对象
	({a,b} = {a:"c",b:"d"});
	console.log(a,b);
}

//默认值
{
	console.log('-----默认值-----')
	let a,b,c;
	[a,b,c=3] = [1,2];
	console.log(a,b,c);
}
{
	let a,b,c;
	[a,b,c] = [1,2];
	console.log(a,b,c);
}

//ex
{
	console.log('-----ex变量交换-----')
	let a = 1,
		b = 2;
	[a,b] = [b,a];
	console.log(a,b);
}

{
	console.log('-----ex函数参数-----')
	let a,b;
	function f(){
		return [1,2];
	}
	[a,b] = f();
	console.log(a,b);
}

{
	console.log('-----ex选择性获取某个变量-----')
	function f(){
		return [1,2,3,4,5];
	}
	let a,
		b,
		c;
	[a,,,b] = f();
	console.log(a,b);
}

{
	console.log('-----ex不确定参数的返回个数-----')
	function f(){
		return [1,2,3,4,5];
	}
	let a,
		b,
		c;
	[a,...b] = f();
	console.log(a,b);
}

{
	console.log('-----对象解构赋值-----');
	let o = {p:42, q:true};
	let {p,q} = o;
	console.log(p, q);
}

{
	console.log('-----对象解构赋值 默认值-----');
	let {p=10,q=5} = {p:3};
	console.log(p, q);
}

{
	console.log('-----ex Json-----');
	let metaData = {
		title: 'abc',
		test:[{
			title: 'test',
			desc: 'description'
		}]
	}
	let {title:esTitle, test:[{title: cnTitle}]} = metaData;
	console.log(esTitle, cnTitle);
}


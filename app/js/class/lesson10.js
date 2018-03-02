{
	console.log('-----数据结构-----');
	console.log('Set WeakSet Map WeakMap 四种')
}

{
	console.log('-----set-----');
	let list = new Set();
	list.add(5);
	list.add(7);

	console.log('size', list.size);
}

{
	let arr = [1,2,3,4,5];
	let list = new Set(arr);
	console.log('size', list.size);
}

{
	// set数据类型的 元素是唯一的
	// 代码不会报错 数据但不会生效
	let list  = new Set();
	list.add(1);
	list.add(2);
	list.add(1);
	// 可以用来去重 但是要注意数据类型
	console.log('list', list);

	let arr = [1,2,3,1,2,'2'];
	let list2 = new Set(arr);
	console.log('unique', list2);
}

{
	// delete has clear add 方法
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);

	console.log('has', list.has('has'));
	console.log('delete', list.delete('has'), list);
	list.clear();
	console.log('list', list);
}

{
	// set实例的遍历
	let arr = ['add', 'delete', 'clear', 'has'];
	let list = new Set(arr);
	// 元素名称
	for(let key of list.keys()){
		console.log('keys-', key);
	}
	for(let value of list.values()){
		console.log('values-', value);
	}

	for(let value of list){
		console.log('vals-', value);
	}
	for(let [key, value] of list.entries()){
		console.log('entries | ', key, value);
	}

	list.forEach(function(item){
		console.log(item);
	})
}


{
	console.log('----WeakSet-----');
}

{
	// 支持的数据类型不一样 只能是对象
	// 没有垃圾回收机制
	// 没有clear()方法， 没有set属性， 不能遍历
	let weakList = new WeakSet();

	let arg = {};
	weakList.add(arg);
	console.log('weakList', weakList);

}


{
	console.log('-----map-----');
	// map可以任何数据做属性
	let map = new Map();
	let arr = ['123'];
	map.set(arr, 456);
	console.log('map', map, map.get(arr));
}

{
	let map = new Map([['a', 123],['b', 456]]);
	console.log('map args-', map)
}

{
	//常用属性 和方法
	let map = new Map([['a', 123],['b',456]]);
	console.log('map size', map.size);
	console.log('map delete', map.delete('a'), map);
	console.log('map clear', map.clear(), map);
}

{
	console.log('-----WeakMap-----');
}
{
	// 接收的key 只能是对象
	// 同上set
	// 同上set
	let weakmap = new WeakMap();
	let o = {};
	weakmap.set(o, 123);
	console.log(weakmap.get(o));
}
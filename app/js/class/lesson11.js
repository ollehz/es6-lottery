{
	console.log('-------数据结构--------');
	console.log('Map 与 Array的对比');
	console.log('Set 与 Arrayde对比');
}

{
	// 数据解构横向对比，增、查、改、删
	let map = new Map();
	let array = [];
	// 增
	map.set('t', 1);
	array.push({t: 1});
	console.info('map-array', map, array);
	// 查
	let map_exist = map.has('t');
	let array_exist = array.find(item => item.t);
	console.info('map-array', map_exist, array_exist);	

	// 改
	map.set('t', 2);
	array.forEach(item => item.t ? item.t=2:'');
	console.info('map-array-modify', map, array);

	// 删除
	map.delete('t');
	let index = array.findIndex(item => item.t);
	array.splice(index,1);
	console.info('map-array-empty', map, array);
}

{
	let set = new Set();
	let array = [];
	let _obj = {'t': 1};

	// 增
	set.add(_obj);
	array.push({'t':1});
	console.log('set-array', set, array)

	// 查
	// 对象 需要查地址
	let set_exist = set.has(_obj);
	let array_exist = array.find(item=>item.t);
	console.log('set-array', set_exist, array_exist);

	// 改
	set.forEach(item => item.t?item.t = 2:'');
	array.forEach(item => item.t?item.t=2:'');
	console.info('set-array-modify', set, array);

	// 删
	set.forEach(item => item.t?set.delete(item): '');
	let index = array.findIndex(item => item.t);
	array.splice(index, 1);
	console.info('set-array-empty', set, array);
}

{
	console.log('--------数据结构--------');
	console.log('Map 与 Object');
	console.log('Set 与 Object');
}

{
	// map, set, object对比
	let item = {'t': 1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	// 增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;
	console.log('map-set-obj', map, set, obj);

	// 查
	console.info({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		obj_exist: 't' in obj
	});

	// 改
	map.set('t', 2);
	item.t = 2;
	obj['t'] = 2;
	console.info('map-set-obj-modify',map,set,obj);

	// 删除
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.info('map-set-obj-empty', map, set, obj);
}

{
	console.log('优先使用map,对数据唯一性有要求的用set');
}
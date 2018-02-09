{
	console.log('##数组扩展##');
}

{
	console.log('-----Array.of()-----')
	let arr = Array.of(3,4,5,6,7);
	console.log('arr', arr);

	let empty = Array.of();
	console.log('empty', empty);
}

{
	console.log('-----Array.from()-----');
	// let p = document.getElementsByTagName('p');
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	console.log(pArr);
	pArr.forEach(function(item){
		console.log(item.textContent);
	})

	console.log(Array.from([2,3,4], function(item){
		return item*2;
	}));
}

{
	console.log('-----Array.fill()');
	// 替换成某个数字
	console.log('fill-7',[1, 'a', undefined].fill(7));
	// 从第一个（默认值是从0开始）换到【长度】三  => [1,2]
	console.log('fill,pos', ['a', 'b', 'c', 'd'].fill(7,1,3));

}

{
	console.log('-----Array.keys()-----');
	for(let index of ['1', 'c', 'ks'].keys()){
		console.log('keys', index);
	}

	console.log('-----Array.values()-----');
	for(let value of ['1', 'c', 'ks'].values()){
		console.log('values', value);
	}

	console.log('-----Array.entries()-----');
	for(let [index, value] of ['1', 'c', 'ks'].entries()){
		console.log('values', index, value);
	}

}

{
	console.log('----- Array.copyWithin() -----');
	//从0位置开始替换 从哪个位置读取数据 从哪个位置结束(3,4]
	console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
	console.log('----- 查找 -----');
	// 只找一个符合的
	console.log([1,2,3,4,5,6].find(function(item){
		return item > 3;
	}))

	// 返回符合元素的下标位置
	console.log([1,2,3,4,5,6].findIndex(function(item){
		return item > 3;
	}))
}

{
	console.log('-----Array.includes()-----');
	console.log('number', [1,2,NaN].includes(1));
	console.log('number', [1,2,NaN].includes(NaN));
}


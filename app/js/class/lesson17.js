{
	console.log('-----Decorator-----');
	/*
		是修饰器

		修饰器 是一个函数
		用来修改 类的行为
	*/
}

{
	// 定义和使用
	let readonly = function(target, name, descriptor){
		descriptor.writable = false;
		return descriptor;
	};

	class Test{
		@readonly //修饰器
		time(){
			return '2017-03-02'
		}
	}

	let test = new Test();

	/*test.time = function(){  // Cannot assign to read only property 'time' of object
		console.log('reset time');
	}*/

	console.log(test.time());
}

{
	let typename = function(target, name, descriptor){
		target.myname = 'helloWorld';
	}

	@typename
	class Test{

	}

	console.log('类修饰符', Test.myname);
	// 第三方库修饰器的js库
	// core-decorators;
}

{
	let log = (type)=>{
		return function(target, name, descriptor){
			let src_method = descriptor.value;
			descriptor.value = (...arg)=>{
				src_method.apply(target, arg);
				console.log(`log ${type}`);
			}
		}
	}

	class AD{
		@log('show')
		show(){
			console.log('ad is show')
		}
		@log('click')
		click(){
			console.log('ad is click');
		}
	}

	let ad = new AD();
	ad.show();
	ad.click();
}
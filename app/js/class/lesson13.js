{
	console.log('------类 的概念------基本语法，类的继承，静态方法，静态属性，getter， setter ');
}

{
	// 类的基本定义和生成实例
	// 关键字 class 定义类
	class Parent{
		// 构造
		constructor(name='javascript'){
			this.name = name;
		}
	}

	let v_parent = new Parent('v');
	console.log('构造函数和实例', v_parent);
}

{
	console.log('-----继承-----');
	// 继承 关键词 extends  || 继承传递参数
	class Parent{
		constructor(name='JavaScript'){
			this.name = name;
		}
	}

	class Child extends Parent{

	}
	console.log('继承', new Child());

}

{
	console.log('-----继承 传递参数 -----');
	class Parent{
		constructor(name='javascript'){
			this.name = name;
		}
	}

	class Child extends Parent{
		constructor(name='child'){
			super(name);
			// 子类新增的要放在 super 后面
			this.type = 'child';
		}
	}

	console.log('继承传递参数', new Child('hello'));
}

{
	console.log('getter, seeter');
	class Parent{
		constructor(name="javascipt"){
			this.name = name;
		}

		get longName(){
			return 'Web-' + this.name
		}

		set longName(value){
			this.name = value;
		}
	}
	let v = new Parent();
	console.log('getter', v.longName);
	v.longName = 'helloWorld';
	console.log('setter', v.longName);
}

{
	console.log('-----静态方法-----');
	class Parent{
		constructor(name='javascript'){
			this.name = name;		
		}
		// 静态方法 关键词static
		static tell(){
			console.log('tell');
		}
	}
	
	Parent.tell();
}

{
	console.log('-----静态属性-----');
	class Parent{
		constructor(name="javascript"){
			this.name = name; 
		}
		static tell(){
			console.log('tell');
		}
	}
	// 静态属性
	Parent.type = 'test';
	console.log('静态属性', Parent.type);
}
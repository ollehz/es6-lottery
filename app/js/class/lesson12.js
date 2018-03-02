{
	console.log('-------Proxy 和 Reflect');
}

{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	};

	// 代理 
	let monitor = new Proxy(obj, {
		// 拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017', '2018')
		},
		// 拦截对象 设置属性
		set(target, key, value){
			// 只能修改name属性
			if(key === 'name'){
				return target[key]=value;
			} else {
				return target[key];
			}
		},
		// 拦截对象 key in object 操作
		has(target,key){
			if(key === 'name'){
				return target[key];
			} else {
				return false;
			}
		},
		// 删除
		deleteProperty(target, key){
			if(key.indexOf('_')>-1){
				delete target[key];
				return true;
			}else {
				return target[key];
			}
		},
		// 拦截 Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyName
		ownKeys(target){
			return Object.keys(target).filter(item => item!='time');
		}
	});

	// 用户 操作
	console.log('get', monitor.time);

	monitor.time = '2018';
	monitor.name="javaScript";
	console.log('set', monitor.time, monitor);

	console.log('has', 'name' in monitor, 'time' in monitor);

	// delete monitor.time;
	// console.log('delete', monitor);

	// delete monitor._r;
	// console.log('delete', monitor);

	console.log('ownKeys', Object.keys(monitor));
}

{
	console.log('--------Reflect--------');
}

{
	let obj = {
		time: '2017-03-11',
		name: 'net',
		_r: 123
	};

	console.log('Reflect-get',Reflect.get(obj, 'time'));
	Reflect.set(obj,'name','JavaScript');
	console.log('Reflect', obj);
	console.log('Reflect-has', Reflect.has(obj,'name'));
}

{
	console.log('-----实例-----');
	/*function validator(target, validator){
		return new Proxy(target,{
			_validator: validator,
			set(target, key, value, proxy){
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy)
					} else {
						throw Error(`不能设置${key}到${value}`);
					}
				} else {
					throw Error(`${key} 不存在`);
				}
			}
		})
	}

	const personValidators = {
		name(val){
			return typeof val === 'string'
		},
		age(val){
			return typeof val === 'number' && val>18
		}
	}

	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this.personValidators)
		}
	}

	const person = new Person('lilei',30);

	console.log(person);*/


}
{
	function validator(target,validator) {
      return new Proxy(target,{
          _validator:validator,
          set(target,key,value,proxy){
            if(target.hasOwnProperty(key)){  //判断对象是否有这个key
                let va=this._validator[key];
                if(!!va(value)){  //先判断是否能赋值
                    return Reflect.set(target,key,value,proxy);
                }else{
                    throw Error(`不能设置${key}到${value}`);
                }
            }else{
                throw Error(`${key} 不存在`);
            }
          }
      });
  }

	const personValidators = {
		name(val){
			return typeof val === 'string'
		},
		age(val){
			return typeof val === 'number' && val>18
		}
	};

	class Person{
		constructor(name, age){
			this.name = name;
			this.age = age;
			return validator(this,personValidators);
		}
	};

	const person = new Person('JavaScript', 30);
	console.info(person);

	//person.name = 48; //会报错 `不能设置`
	person.name = 'es6';
	console.info(person);
}


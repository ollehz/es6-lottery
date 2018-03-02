{
	console.log('-----Promise-----');
}

{
	let ajax = function(callback){
		console.log('执行');
		setTimeout(function(){
			callback && callback.call()
		}, 1000);
	};
	ajax(function(){
		console.log('timeout1');
	});
}

{
	let ajax = function(){
		console.log('执行2');
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve();
			}, 1000);
		})
	};
	ajax().then(function(){
		console.log('Promise', 'timeout2'); // resolve
	}
	/*,function(){
	
	} // reject*/);
}

{
	let ajax = function(){
		console.log('执行3');
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve()
			}, 1000);
		})
	};
	ajax().then(function(){
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve()
			}, 2000);
		});
	}).then(function(){
		console.log('timeout3');
	})
}

{
	let ajax = function(num){
		console.log('执行4');
		return new Promise(function(resolve, reject){
			if(num>5){
				resolve()
			}else {
				throw new Error('出错了');
			}
		})
	}
	ajax(3).then(function(){
		console.log('log', 3);
	}).catch(function(err){
		console.log('catch', err);
	})
}

{
	// promise.all()
	// promise.race();

}

{
	// 所有图片加载完再添加到页面
	function loadImg(src){
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload= function(){
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}
	function showImgs(imgs){
		imgs.forEach(function(img){
			document.body.appendChild(img);
		})
	}

	Promise.all([
		loadImg('http://7xpkss.com1.z0.glb.clouddn.com/2017_ife_01.jpg'),
		loadImg('http://7xpkss.com1.z0.glb.clouddn.com/2017_ife_01.jpg'),
		loadImg('http://7xpkss.com1.z0.glb.clouddn.com/2017_ife_01.jpg')
	]).then(showImgs);
}

{
	// 有一个图片加载完再添加到页面
	function loadImg(src){
		return new Promise((resolve, reject) => {
			let img = document.createElement('img');
			img.src = src;
			img.onload= function(){
				resolve(img);
			}
			img.onerror = function(err){
				reject(err);
			}
		})
	}

	function showImgs(img){
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p)
	}
	Promise.race([
		loadImg('http://7xpkss.com1.z0.glb.clouddn.com/2017_ife_01.jpg'),
		loadImg('http://7xpkss.com1.z0.glb.clouddn.com/2017_ife_01.jpg'),
		loadImg('http://7xpkss.com1.z0.glb.clouddn.com/2017_ife_01.jpg')
	]).then(showImgs)
}
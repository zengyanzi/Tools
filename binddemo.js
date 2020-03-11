/* 	function.prototype.bind1=function(){
		//将参数解析为数组
		constargs = Array.prototype.slice.call(arguments)
		//获取this(取出数组第一项，数组剩余的就是传递的参数)
		const t = args.shift()
		const self = this //当前函数
		//返回一个函数
		return function () {
			//执行原函数，并返回结果
			retrun self.appy(t,args)
		}
	} */
	
/* 	function fn1(a,b,c){
		console.log('this',this)
		console.log(a,b,c)
		return 'this is fn1'
	}
	
	const fn2 =fn1.bind({x:100},10,20,30)
	const result =fn2();
	console.log(result); */
	
	//fn1.__proto__ === function.prototype
	//function.prototype.apply
	
	
	//模拟bind
	Function.prototype.bind1 =function (){
		//将参数拆解为数组
		const  args=Array.prototype.slice.call(arguments)//这个方法将列表变为数组
		//获取this（数组第一项）
		const t = args.shift()
		//fn1.bind(...)中的fn1
		const self = this
		//返回一个函数
		return function (){
			return self.apply(t,args)
		}
	}
	
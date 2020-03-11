// console.log("closure")
	// function create(){
		// let a = 100
		// return function(){
			// console.log(a)
		// }
	// }
	// let fn = create()
	// let a =200
	// fn()
	
	function print(){
		const a = 200
		fn()
	}
	const a = 100
	function fn(){
		console.log(a)
	}
	print(fn)
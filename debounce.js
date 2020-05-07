const input1=document.getElementById("input1");
/* let timer = null
input1.addEventListener('keyup',function(){
	if(timer){
		clearTimeout(timer)
	}
	timer = setTimeout(()=>{
		//触发change事件
		console.log(input1.value)
		timer = null
	},500)
	
}) */


//封装debounce函数
function debounce(fn,delay = 500){
	//timer是在闭包中的
	let timer = null
	return function(){
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(()=>{
			fn.apply(this.arguments)
			timer= null
		},delay)
	}
}

input1.addEventListener('keyup',debounce(()=>{
	console.log(input1.value)
}),600)
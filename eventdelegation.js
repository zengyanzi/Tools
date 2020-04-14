console.log('eventdelegation');
/* function bindEvent(elem,type,fn){
	elem.addEventListener(type,fn)
} */

function bindEvent(elem,type,selector,fn){
	//如果传3个参数，就是普通绑定
	if(fn == null) {
		fn=selector
		selector =null
	}
	elem.addEventListener(type,event=>{
		const target = event.target
		if(selector){
			//代理
			if(target.matches(selector)){
				fn.call(target,event)
			}
		}else{
			//普通绑定
			fn.call(target,event)
		}
	})
	
}
const div1 =document.getElementById('div1')
/* bindEvent(div1,'click',e=>{
	event.preventDefault()
	const target = e.target
	if(target.nodeName === 'A'){
		alert(target.innerHTML)
	}
}) */

bindEvent(div1,'click','a',e=>{
	event.preventDefault()
	alert(this.innerHTML)
})
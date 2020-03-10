console.log('jquerydemo');
class JQuery{
	constructor(selector){
		const result =document.querySelectorAll(selector)
		const length =result.length;
		for (let i =0;i<length;i++){
			this[i]=result[i];
		}
		this.length=length
		//类似于数组，但其实是object
		this.selector=selector;
	}
	get(index){
		return this[index]
	}
	each(fn){
		for(let i = 0;i<this.length;i++){
			const elem =this[i]
			fn(elem)
		}
	}
	on(type,fn){
		return this.each(elem=>{
			elem.addEventListener(type,fn,false)
		})
	}
}

//插件
JQuery.prototype.dialog=function(info){
	alert(info)
}

class myJQuery extends JQuery{
	constructor(selector){
		super(selector)
	}
	addClass(className){
		
	}
	style(data){
		
	}
}

	//const $p = new JQuery('p');
	//$p.get(1)
	//$p.each
	//$p.on('click',()=>alert('clicked'))
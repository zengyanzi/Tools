console.log('dom3.js');
const list = document.getElementById("list");

/* for (let i=0;i<10;i++){
	const li = document.createElement('li');
	li.innerHTML =`list item ${i}`
	list.appendChild(li)
} */

//不应该在循环里插入

	//将频繁操作改为一次性操作
	
	//创建一个文档片段，此时还没插入到DOM树中
	const frag =document.createDocumentFragment()
	//执行插入
	for (let i=0;i<20;i++){
	const li = document.createElement('li');
	li.innerHTML =`list item ${i}`
	
    //先插入文档片段
	frag.appendChild(li)
	
	list.appendChild(frag)
}
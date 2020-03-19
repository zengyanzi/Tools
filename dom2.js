console.log('dom2')
const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
//新建节点
const p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
 //插入节点
div1.appendChild(p1)
//移动节点
const p2 = document.getElementById('p2')
div2.appendChild(p2)

//获取父元素
console.log(p1.parentNode)

//获取子元素列表

const div1ChildNodes= div1.childNodes;

console.log(div1ChildNodes)

const div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(child=>{
	if (child.nodeType===1){
		return true
	}
	return false
})

console.log('div1ChildNodesP',div1ChildNodesP)

div1.removeChild(div1ChildNodesP[0])



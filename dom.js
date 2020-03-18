console.log("dom");
const div1=document.getElementById('div1') //元素
console.log('div1',div1)
const divList = document.getElementsByTagName('div') // 集合
console.log('divList.length',divList.length)
console.log('divList[1]',divList[1])

const containerList= document.getElementsByClassName('container')//集合
console.log('containerList[1]',containerList[1])
const pList =document.querySelectorAll('p') // 集合
console.log('pList',pList)

const p1 =pList[0]
//property是一种形式
p1.style.width='100px'
console.log(p1.style.width)
p1.className='red'
console.log(p1.className)

console.log(p1.nodeName)
console.log(p1.nodeType)


//attribute
		p1.setAttribute('data-name','imooc')
		
		console.log(p1.getAttribute('data-name'))
		p1.setAttribute('style','font-size:50px;')
		console.log(p1.getAttribute('style'))
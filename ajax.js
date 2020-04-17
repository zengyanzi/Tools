console.log("ajax")
const xhr = new XMLHttpRequest()
//false代表异步请求，因为是网络请求，不能卡顿
xhr.open('GET','/test.json',false)
xhr.onreadystatechange = function (){
	if(xhr.readyState ===4){
		if(xhr.status ===200){
			alert(xhr.responseText)
		}else{
			console.log("other situatio")
		}
	}
}
xhr.send(null)

const xhr = new XMLHttpRequest()
//false代表异步请求，因为是网络请求，不能卡顿
xhr.open('POST','/login',false)
xhr.onreadystatechange = function (){
	if(xhr.readyState ===4){
		if(xhr.status ===200){
			alert(xhr.responseText)
		}else{
			console.log("other situatio")
		}
	}
}
const postData={
	userName:'jason',
	password:'xxx'
}
xhr.send(JSON stringify(postData))
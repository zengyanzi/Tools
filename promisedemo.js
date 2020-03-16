const url1 ="https://cdn.rsjoomla.com/images/blog/easter2017/blog-easter-2017.jpg"
const url2="https://www.crazyparts.co.nz/media/wysiwyg/home_page/promotion/easter/Easter-event-1200.jpg"

function loadImg(src){
	return new Promise(
		(resolve,reject)=>{
			const img = document.createElement('img')
			img.onload=()=>{
				resolve(img)
			}
			img.onerror=()=>{
				const err = new Error('fail to load image${src}')
				reject(err)
			}
			img.src=src 
		}
	)
	
}

/* loadImg(url).then(img=>{
	console.log(img.width)
	return img
}).then(img=>{
	console.log(img.height)
}).catch(ex=>console.error(ex)) */

loadImg(url1).then(img=>{
	console.log(img.width)
	return img //普通对象
}).then(img=>{
	console.log(img.height)
	return loadImg(url2)// promise 实例
}).then(img2=>{
	console.log(img2.height)
	return img2
}).then(img2=>{
	console.log(img2.width)
}).catch(ex=>console.error(ex))
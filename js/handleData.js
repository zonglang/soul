//加载数据文件
importScripts("./data.js")
var next = 0
self.addEventListener('message',function(e){
	// var data = e.data;
	// switch (data.cmd){
	// 	case 'start':
	// 		self.postMessage("Worker Start"+data.msg)
	// 		break
	// 	case 'stop':
	// 		self.postMessage("Worker Stop"+data.msg)
	// 		break
	// 	default:
	// 		self.postMessage("Worker Default"+data.msg)
	// }
	self.postMessage(MESSAGES.slice(next,next+100))
	next=next+100
},false)


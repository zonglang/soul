<template>
	<div id="chatContent"
			@scroll="scroll">
		<div id="chatList">
			<message
			v-for="(message,index) in messages"
			:key="index"
			:messageData="message.data"
			:messagePosition="message.fromId=='33480331'?'right':'left'"
			></message>
		</div>
		<div class="heart"></div>
		<div class="boy"></div>
		<button @click="addMessages">添加</button>
	</div>
</template>

<script>
	import message from "./message.vue"

	export default{
		name:"chatContent",
		components:{
			message,
		},
		mounted(){
			this.worker = new Worker("./js/handleData.js")
			var _this = this
			this.worker.onmessage = function(event){
				// console.log(event.data)
				console.log(_this)
				 _this.messages = _this.messages.concat(event.data)
				 _this.addFlag = true;
			}
		},
		data(){
			return{
				messages:[],
				worker:null,
				addFlag:true,
			}
		},
		methods:{
			addMessages(){
				console.log("addMessages")
				this.worker.postMessage("111")
			},
			scroll(e){
				if(this.addFlag && 
					e.target.children[0].offsetHeight-e.target.scrollTop > 0 &&
					e.target.children[0].offsetHeight-e.target.scrollTop < e.target.clientHeight*2){
					this.addFlag=false;
					this.addMessages();
				}
			}
		}
	};
</script>

<style scoped>
	#chatContent{
		position: relative;
		width:100%;
		background-image: url("../img/herBackground.jpeg");
        background-repeat: no-repeat;
        /*background-size:auto 100vh;*/
	}
	.heart{
		position: fixed;
		right:60px;
		top:227px;
		width: 110px;
		height: 100px;
		background-image: url("../img/heart.png")
	}
	.boy{
		position:fixed;
		right:43%;
		bottom: 12vh;
		width:54px;
		height: 57px;
		transform: translate(-50%,0);
		background-image: url("../img/boy.png")
	}
</style>


<template>
	<div class="message"
		:class="{
			'left-message':isLeft,
			'right-message':isRight,
		}"
	>
		<!-- 头像 -->
		<img 
			v-if="isLeft"
			class="chatAvatar" src="../img/his.png" alt="#">
		<!-- 文本消息 -->
		<div
			v-if="isText"
			:class="{
				'hasRead':hasRead
			}">
			<div class="content">
					<span class="contentText">{{messageText}}</span>
			</div>
		</div>
		
		<!-- 图片消息 -->
		<!-- img为可替换元素，没有before、after -->
		<div
			v-if="isImg"
			:class="{
				'hasRead':hasRead
			}"
		>
			<img class="chatImg" :src="picUrl" alt="" :height="imgH" :weight="imgW">
		</div>

		<!-- 音频消息 -->
		<div
			v-if="isVoice"
			:class="{
				'hasRead':hasRead
			}"
		>
			<div class="content" style="padding:10px">
					<voice-strip
						:duration="voiceDuration"
						:url="voiceUrl"
						:messagePosition="messagePosition"
					></voice-strip>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import voiceStrip from "./voiceStrip.vue"
	export default{
		name:"message",
		components:{
			voiceStrip
		},
		props:{
			messageData:Object,
			messagePosition:String
		},
		created(){
			// 是文本类型消息
			if(this.messageData.hasOwnProperty("text")){
				this.isText=true
				this.hasRead=true
				this.messageText=this.messageData.text
				// var element=document.getElementById("contentText")
				// console.log(element)
				// Emoji.emoji(element)
			}else if(this.messageData.hasOwnProperty("imageH")){
				this.isImg=true
				this.hasRead=true
				this.picUrl=this.messageData.imageUrl
				if(this.messageData.imageH>400){
					this.imgH="400"
					this.imgW=""
				}else{
					this.imgH=this.messageData.imageH
					this.imgW=this.messageData.imageW
				}	
			}else if(this.messageData.hasOwnProperty("duration")){
				this.isVoice=true
				this.hasRead=true
				this.voiceUrl=this.messageData.url
				this.voiceDuration=this.messageData.duration
			}
			if(this.messagePosition=="left"){
				this.isLeft=true
			}else if(this.messagePosition=="right"){
				this.isRight=true
			}
		},
		data(){
			return{
				isLeft:false,
				isRight:false,
				isText:false,
				isImg:false,
				isVoice:false,
				hasRead:false,
				messageText:"",
				picUrl:"",
				voiceUrl:"",
				voiceDuration:0,
				imgH:"",
				imgW:"",
			}
		},
		methods:{
		
		}
	};
</script>

<style scoped>
	.message{
		box-sizing: border-box;
		width: 100%;
		display: flex;
		margin: 40px 20px;
		padding:0 30px;
		font: normal 100% Helvetica, Arial, sans-serif;
		font-size: 34px;
	}
	.left-message{
		flex-flow:row nowrap;
	}
	.left-message .content{
		margin-left: 20px;
		margin-top: 20px;
		background-color: rgb(245,245,245);
		padding:25px;
		display: flex;
		max-width:510px;
		align-items: flex-start; 
		word-break: break-all;
		/*使用border-radius构造气泡*/
		border-radius:0 40px 40px 40px/0 40px 40px 40px;
	}
	.right-message{
		flex-flow:row-reverse nowrap;
	}
	.right-message .content{
		margin-right: 20px;
		position:relative;
		background-color: #25D4D0;
		color:white;
		padding:25px;
		display: flex;
		max-width:510px;
		align-items: flex-start; 
		/*使用border-radius构造气泡*/
		border-radius:40px 0px 40px 40px/40px 0px 40px 40px;
	}
	.chatAvatar{
		margin-left: -20px;
		width:120px;
		height:120px;
		border-radius: 50%;
	}
	.chatImg{
		padding:0 20px;
		border-radius: 30px;
	}
	/*使用before伪元素实现已阅读的标记*/
	.right-message .hasRead{
		position: relative;
	}
	.right-message .hasRead:before{
		content:" ";
		display: inline-block;
		position:absolute;
		bottom:0;
		left:-15px;
		width:10px;
		height: 10px;
		background: #25D4D0;
		border:1px solid #25D4D0;
		border-radius:50%;
	}





</style>
<template>
	<div class="voiceStrip"
			:class="voiceStripObject"
			@click="playAudio">
		<div class="strip">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="duration">
			{{duration}}s
		</div>
		<audio ref="audio" id="audio" :src="url"></audio>
	</div>
	
</template>

<script>
	export default{
		name:"voiceStrip",
		props:{
			"duration":Number,
			"url":String,
			"messagePosition":String,
		},
		data(){
			return{
				"playAnimation":false,
			}
		},
		methods:{
			playAudio(){
				var audio = this.$refs.audio;
				var that = this;
				audio.addEventListener('ended', function () {  
			        that.playAnimation=false
			    }, false);
				if(audio.paused){
					audio.load()
					audio.play()
					this.playAnimation=true
				}else{
					audio.pause()
					this.playAnimation=false
				}
			},
		},
		computed:{
			voiceStripObject:function(){
				return{
					'playAnimation':this.playAnimation,
					'rightMessage':this.messagePosition=='right',
					'leftMessage':this.messagePosition=='left'
				}
			}
		}
	};
</script>

<style scoped>
	@keyframes yuying1{
				0%{
					height: 0%;
				}
				20%{
					height: 50%;
				}
				50%{
					height: 100%;
				}
				80%{
					height: 50%;
				}
				100%{
					height: 0%;
				}
			}	
			
			@keyframes yuying2{
				0%{
					height: 0%;
				}
				20%{
					height: 20%;
				}
				50%{
					height: 50%;
				}
				80%{
					height: 20%;
				}
				100%{
					height: 0%;
				}
			}

			.voiceStrip{
				width: 300px;
				height: 50px;
				padding: 10px;
				display: flex;
				align-items: center;
			}
			.voiceStrip.leftMessage{
				flex-direction: row;
			}
			.voiceStrip.rightMessage{
				flex-direction: row-reverse;
			}
			.voiceStrip .strip{
				height: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			.voiceStrip .strip div:nth-child(-n+12){
				width:4px;
				height: 50%;
				margin-left: 12px;
				border-radius: 50px;
				background-color: #25D4D0;
				vertical-align: middle;
				/*display: inline-block;*/
			}
			.voiceStrip .strip div:nth-child(1){
				height: 25%;
			}
			.voiceStrip .strip div:nth-child(2){	
				height: 50%;
			}
			.voiceStrip .strip div:nth-child(3){	
				height: 100%;
			}
			.voiceStrip .strip div:nth-child(4){	
				height: 100%;
			}
			.voiceStrip .strip div:nth-child(5){	
				height: 50%;
			}
			.voiceStrip .strip div:nth-child(6){	
				height: 25%;
			}
			.voiceStrip .strip div:nth-child(7){	
				height: 30%;
			}
			.voiceStrip .strip div:nth-child(8){	
				height: 25%;
			}
			.voiceStrip .strip div:nth-child(9){	
				height: 30%;
			}
			.voiceStrip .strip div:nth-child(10){	
				height: 25%;
			}
			.voiceStrip .strip div:nth-child(11){	
				height: 10%;
			}
			.voiceStrip .strip div:nth-child(12){	
				height: 10%;
			}
			.voiceStrip.playAnimation .strip div:nth-child(1){
				animation:yuying2 0.8s infinite 0.1s;
			   -webkit-animation:yuying2 0.8s infinite 0.1s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(2){
				animation:yuying2 0.8s infinite 0.2s;
			   -webkit-animation:yuying2 0.8s infinite 0.2s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(3){
				animation:yuying1 0.8s infinite 0.3s;
			   -webkit-animation:yuying1 0.8s infinite 0.3s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(4){
				animation:yuying2 0.8s infinite 0.3s;
			   -webkit-animation:yuying2 0.8s infinite 0.3s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(5){
				animation:yuying2 0.8s infinite 0.2s;
			   -webkit-animation:yuying2 0.8s infinite 0.2s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(6){
				animation:yuying1 0.8s infinite 0.1s;
			   -webkit-animation:yuying1 0.8s infinite 0.1s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(7){
				animation:yuying2 0.8s infinite 0.2s;
			   -webkit-animation:yuying2 0.8s infinite 0.2s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(8){
				animation:yuying2 0.8s infinite 0.15s;
			   -webkit-animation:yuying2 0.8s infinite 0.15s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(9){
				animation:yuying2 0.8s infinite 0.2s;
			   -webkit-animation:yuying2 0.8s infinite 0.2s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(10){
				animation:yuying2 0.8s infinite 0.25s;
			   -webkit-animation:yuying2 0.8s infinite 0.25s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(11){
				animation:yuying2 0.8s infinite 0.1s;
			   -webkit-animation:yuying2 0.8s infinite 0.1s;
			}
			.voiceStrip.playAnimation .strip div:nth-child(12){
				animation:yuying2 0.8s infinite 0.15s;
			   -webkit-animation:yuying2 0.8s infinite 0.15s;
			}
			.voiceStrip .duration{
				color:#25D4D0;
				font-size: 30px;
				margin: 0 40px;
				padding:10px;
			}
</style>
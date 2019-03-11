<template>
	<div class="chatHeader" @click="clickHeader">
		<div class="backIcon"></div>
		<div class="middleContent">
			<div class="remark">月色与雪色之间，是...</div>
			<div class="soulmate"></div>
		</div>
		<div class="more">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"chatHeader",
		data(){
			return{

			}
		},
		methods:{
			clickHeader(){
				console.log("222")
			}
		}
	};
</script>
<style scoped>
	.chatHeader{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items:center;
	}
	.backIcon{
		margin-left:30px;
		 width:20px;
		 height:20px;
		 border-top:4px solid #555;
		 border-left:4px solid #555;
		 transform: rotate(-45deg)
	}
	.soulmate{
		background-image: url(../img/soulmate.png);
		width: 150px;
		height: 50px;
		margin:0 auto;
	}
	.more div{
		margin-right:30px;
		margin-top:8px;
		width: 6px;
		height: 6px;
		border-radius:50%;
		background:black;
	}

</style>
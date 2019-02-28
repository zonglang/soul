<template>
	<div class="chatContent">
		<message
			v-for="(message,index) in messages"
			:key="index"
			:messageData="message.data"
			:messagePosition="message.fromId=='24186721'?'right':'left'"
		></message>
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
			this.getMessages()
		},
		data(){
			return{
				messages:[]
			}
		},
		methods:{
			getMessages(){
				this.messages=MESSAGES
			}
		}
	};
</script>
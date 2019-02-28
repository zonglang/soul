<template>
	<div class="chatHeader" @click="clickHeader">
		这是chatHeader
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
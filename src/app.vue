<template>
    <div class="App">
        <chat-header class="chatHeader"></chat-header>
        <chat-content class="chatContent"></chat-content>
        <chat-bottom class="chatBottom"></chat-bottom>
    </div>
</template>

<script>
    import chatHeader from './components/chatHeader.vue'
    import chatContent from './components/chatContent.vue'
    import chatBottom from './components/chatBottom.vue'

	export default {
        name: "App",
        components:{
            chatHeader,
            chatBottom,
            chatContent
        },
        mounted(){
            console.log("mounted")
            // console.log(Object.prototype.toString.call(elements))
        },
        data() {
            return {
                text: "Hello, Vue!"
            };
        },
        methods:{
            clickHeader(){
                (() => {console.log("123")})()
            }
        }
    };
</script>

<style scoped>
    .App{
        margin:0px;
        padding:0px;
        display:flex;
        flex-direction: column;
        font-size: 32px;
        overflow-y: hidden;
    }
    .chatHeader{
        height: 8vh;
        min-height: 140px;
        background: white;
    }
    .chatContent{
        height: 80vh;
        /*background:pink;*/
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .chatBottom{
        height: 12vh;
    }
</style>
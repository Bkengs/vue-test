<template>
    <div class="main">
    	<v-top @getLogin="setLogin"></v-top>
    	<v-left :flag='islogin'></v-left>
    	<div class="content">
    		<router-view @loadstart="loadstart" @loadend="loadend"></router-view>
            <div v-show="load" class="loading"><i class="fa fa-spinner" aria-hidden="true"></i></div>
    	</div>
    </div>
</template>
<script>
    import vTop from './top.vue'
    import vLeft from './left.vue'
    export default {
        data(){
            return{
                islogin: localStorage.getItem("username"),
                load: false
            }
        },
        methods: {
            setLogin: function(){
                this.islogin = localStorage.getItem("username")
            },
            loadstart: function(){
                this.load = true;
            },
            loadend: function(){
                this.load = false;
            }
        },
    	components: {
    		vTop,vLeft
    	}
    }
</script>
<style lang="less" scoped>
    .content{
        background-color: #EDEDED;
        top: 60px;
        left: 80px;
        bottom: 0px;
        right: 0px;
        position: absolute;
        overflow-y: scroll;
        .loading{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: rgba(255, 255, 255, 0.8);
            i{
                animation: 1s loading linear infinite;
                color: #3F5689;
                position: absolute;
                top: 48%;
                left: 48%;
                font-size: 30px;
            }
        }
    }
    @keyframes loading {
        100% { transform:rotate(360deg) }
    }
</style>
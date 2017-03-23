<template>
    <div class="main">
    	<v-top @getLogin="setLogin"></v-top>
    	<v-left :flag='islogin'></v-left>
    	<div class="content">
    		<router-view></router-view>
    	</div>
    </div>
</template>
<script>
    import vTop from './top.vue'
    import vLeft from './left.vue'
    export default {
        data(){
            return{
                islogin: localStorage.getItem("username")
            }
        },
        methods: {
            setLogin: function(){
                this.islogin = localStorage.getItem("username")
            }
        },
    	components: {
    		vTop,vLeft
    	}
    }
</script>
<style lang="less">
    .content{
        background-color: #EDEDED;
        top: 60px;
        left: 80px;
        bottom: 0px;
        right: 0px;
        position: absolute;
        overflow-y: scroll;
    }
</style>
<template>
    <div class="left">
        <span>
            <router-link to="/page1">首页</router-link>
        </span>
        <span>
            <router-link to="/page2">图表</router-link>
        </span>
        <span v-show="flag">
            <router-link to="/page3">表格</router-link>
        </span>
    </div>
</template>
<script>
    export default {
        props: ['flag'],
        data(){
            return {
                // isLogin: localStorage.getItem("username")
            }
        }
    }
</script>
<style scoped lang="less">
    .left{
    	width: 80px;
    	position: absolute;
    	top: 60px;
    	bottom: 0px;
    	left: 0px;
    	background-color: #3F5689;
        span{
            a{
                display: inline-block;
                width: 100%;
                box-sizing: border-box;
                color: #fff;
                height: 80px;
                line-height: 80px;
                text-align: center;
                border-bottom: 1px solid #AFC8FF;
                color: #fff;
                text-decoration: none;
            }
            a.router-link-active{
                background-color: #183678;
                border-left: 4px solid #FF8E41;
            }
        }
    }
</style>
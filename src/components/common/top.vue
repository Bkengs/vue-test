<template>
    <div class="top">
    	<img class="logo" src="../../assets/logo.png" alt="">
    	<span>
    		这是一个VUE项目
    	</span>
    	<div class="right">
    		<button>登录</button>
    		<button>注册</button>
    	</div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang='less'>
    .top{
    	height: 60px;
    	box-sizing: border-box;
    	width: 100%;
    	line-height: 60px;
    	font-size: 24px;
    	img{
    		height: 60px;
    		margin-left: 10px;
    		margin-right: 10px;
    		float: left;
    	}
		.right{
			float: right;
			height: 100%;

		}
    }
</style>
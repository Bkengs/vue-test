<template>
    <div>
		<div class="tab">
			<router-link to="/page4/app">APP组</router-link>
			<router-link to="/page4/pc">PC组</router-link>
		</div>{{this.resdata}}
		<div class="content">
		
    		<router-view></router-view>
    	</div>
    </div>
</template>
<script>
	import axios from 'axios';
    export default {
    	data(){
    		return {
    			app: ['张三1','张三2','张三2','张三2'],
    			pc: ['李四1','李四2','李四3','李四4','李四5'],
    			resdata: ''
    		}
    	},
    	beforeCreate: function(){
    		this.$emit('loadstart');
    	},
    	// mounted: function(){
    	// },
    	// created: function(){

    	// },
    	beforeMount: function(){
    		axios.get('/static/data/test.json').then( (res) => {
                this.resdata = res.data;
                this.$emit('loadend');
            })
    	},
    	
    	// beforeUpdate: function(){
    	// 	console.log("beforeUpdated");
    	// },
    	// updated: function(){
    	// 	console.log("updated");
    	// },
    	// beforeDestroy: function(){
    	// 	console.log("beforeDestroyed");
    	// },
    	// destroyed: function(){
    	// 	console.log("destroyed");
    	// },
    }
</script>
<style scoped lang="less">
	.tab{
		width: 95%;
		height: 50px;
		line-height: 50px;
		background-color: #fff;
		border-radius: 6px;
		margin-left: 2.5%;
		margin-top: 20px;
		padding-left: 30px;
		box-sizing: border-box;
		font-size: 18px;
		a{
			display: inline-block;
			height: 100%;
			width: 100px;
			text-align: center;
			box-sizing: border-box;
			color: #999;
			cursor: pointer;
			text-decoration: none;
		}
		a.router-link-active{
			color: #87A1DA;
			border-bottom: 4px solid #87A1DA;
		}
		a:hover{
			color: #87A1DA;
		}
	}
    .content{
		box-sizing: border-box;
		width: 95%;
		margin-left: 2.5%;
		margin-top: 10px;
    }
</style>
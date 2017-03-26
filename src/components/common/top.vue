<template>
    <div class="top">
    	<img class="logo" src="../../assets/logo.png" alt="">
    	<span>
    		这是一个VUE项目
    	</span>
    	<div class="right">
    		<el-button  v-show="!isLogin" class="login1" type="primary" @click="dialogTableVisible = true">登录</el-button>
            <el-dialog  v-show="isLogin" title="登录" v-model="dialogTableVisible">
                <el-form :model="user" :rules="userCheck" ref="userFrom" label-width="50px">
                    <el-form-item label="账号" prop="name">
                        <el-input v-model="user.name" auto-complete="off" type="text" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="passward">
                        <el-input v-model="user.passward" auto-complete="off" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('userFrom')">提交</el-button>
                        <el-button @click="resetForm('userFrom')">重置</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <div class="quit" v-show="isLogin">
                <span class="hello">你好! {{ isLogin }}</span>
                <el-popover
                    ref="popover5"
                    placement="bottom"
                    width="160"
                    v-model="visible2">
                    <p>确定退出？</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="quitOut()">确定</el-button>
                    </div>
                </el-popover>
                <el-button  class="login1" type="warning" v-popover:popover5 >退出</el-button>
                
            </div>
    	</div>
    </div>
</template>
<script>

    export default {
        data() {
            var pwdCheck = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('请输入密码'));
                }
                else if(value !== 'test'){
                    callback(new Error('密码错误'));
                }else{
                    callback();
                }
            };
            var accentCheck = (rule, value, callback) => {
                if(value === ''){
                    callback(new Error('请输入账号'));
                }
                else if(value !== 'test'){
                    callback(new Error('账号不存在'));
                }
                else{
                    callback();
                }
            };

            return {
                dialogTableVisible: false,
                visible2: false,
                user: {
                    name: '',
                    passward: '',
                    isLogin: localStorage.getItem("username")
                },
                isLogin: localStorage.getItem("username"),
                userCheck: {
                    name: [
                        { validator: accentCheck, trigger: 'blur'}
                    ],
                    passward: [
                        { validator: pwdCheck, trigger: 'blur'}
                    ]
                }
            }
        },
        computed: {
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem("username",this.user.name);
                        this.dialogTableVisible = false;
                        this.isLogin = this.user.name;
                        this.$emit('getLogin');
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            quitOut(){
                localStorage.removeItem("username");
                this.isLogin = '';
                this.$emit('getLogin');
                this.visible2 = false;
                if(this.$route.path == '/page3'){
                    this.$router.push('/page1');
                }
            }
        }
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
            button.login1{
                margin-right: 20px;
            }
            button.login2{
                width: 100%;
            }
            .quit{
                .hello{
                    font-size: 18px;
                }
            }
		}
    }
</style>
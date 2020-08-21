<template>
    <div class="content">
            <img class="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597598082616&di=f077deb2cc0b0d2059ee52e4ea019058&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20170820%2F83911cc756f54937a9782f1a75c738ef.jpeg" alt="">
        <div class="login-form">
            <el-input class="username-input" placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="formLabelAlign.username"></el-input>
            <el-input class="password-input" type="password"  placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="formLabelAlign.password"></el-input>
            <div class="submit">
                <el-button @click="login" class="login" type="primary">登录</el-button>
<!--                <el-button @click="register" type="primary">注册</el-button>-->
            </div>
          <div class="gotoregister">没有账号？<a href="/register">去注册</a></div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: "login",
        data() {
            return {
                labelPosition: 'right',
                formLabelAlign: {
                    username: '',
                    password: '',
                },
                token: ""
            };
        },
        methods:{
            login(){
                if (this.formLabelAlign.password==""||this.formLabelAlign.username==""){
                    this.$message.error("账号和密码不能为空！")
                    return
                }
                    axios.post("http://localhost:8080/login",{
                        username : this.formLabelAlign.username,
                        password : this.formLabelAlign.password,
                    }).then((res)=>{
                        console.log(res.data)
                        if (res.data.LoginStatus === "failed"){
                            this.$message.error("账号或密码错误，请重新输入！")
                        }else {
                            this.token=res.data.token
                            localStorage.setItem("token",res.data.token)
                            localStorage.setItem("username",res.data.username)
                          console.log(localStorage.getItem("username"));
                          this.$store.commit("SaveUserInfo",res.data)
                            console.log("this.$store.getters.getUserInfo:===",this.$store.getters.getUserInfo);

                            this.$message.success("登录成功！")
                            this.$router.replace("/")
                        }

                    })
            },
            register(){
              this.$router.replace("/register")
            }
        }
    }
</script>

<style scoped>
    .content{
        width:100%;
        height:100%;
        position:relative;
        text-align:center;
        line-height:100%;
        color:white;
    }
    .content::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background:transparent url("../../assets/img/login.jpg") center center no-repeat;
        filter:blur(6px);
        z-index:-1;
        background-size:cover;
    }
    .login-form{
        position: absolute;
        left: 40%;
        top: 35%;
        width: 20%;
        height: 30%;
        text-align: center;
    }
    .username-input,.password-input{
        margin: 10px 0px;
    }

    .submit{
        display: flex;
        justify-content: space-around;
    }
    .logo{
        border-radius: 50%;
        width: 140px;
        height: 140px;
        left: calc(50% - 70px);
        bottom: 67%;
        position: absolute;
    }
    .login{
      margin-top: 10px;
      width: 100%;
    }
    .gotoregister{
      margin-top: 4px;
      font-size: 12px;
      color: #919191;
    }
    .gotoregister a{
      text-decoration: none;
      color: #6547DB;
    }



</style>
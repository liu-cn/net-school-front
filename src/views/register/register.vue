<template>
  <div class="content">
      <div class="login-form">
        <el-input class="username-input" placeholder="请输入账号" prefix-icon="el-icon-user-solid" v-model="formLabelAlign.username"></el-input>
        <el-input class="password-input" type="password"  placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="formLabelAlign.password"></el-input>
        <el-input class="password-input" type="password"  placeholder="请确认密码" prefix-icon="el-icon-lock" v-model="formLabelAlign.password2"></el-input>
        <el-input class="password-input" type="password"  placeholder="请输入手机号" prefix-icon="el-icon-mobile-phone" v-model="formLabelAlign.phone"></el-input>
        <div class="submit">
          <el-button @click="register" class="register" type="primary">注册并登录</el-button>
        </div>
        <div class="gotologin">已有账号？<a href="/login">去登录</a></div>
      </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  name: "register",
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        username: '',
        password: '',
        password2:"",
        phone:"",
      },
      token: ""
    };
  },
  methods:{
    register(){
      if (this.formLabelAlign.username===""||this.formLabelAlign.password===""||this.formLabelAlign.password2===""||this.formLabelAlign.phone===""){
        this.$message.warning("请把表单填写完整！")
        return
      }
      if (this.formLabelAlign.password!==this.formLabelAlign.password2){
        this.$message.warning("两次输入的密码不一致，请重新输入")
        return
      }
      axios.post("http://localhost:8080/register",{
        username:this.formLabelAlign.username,
        password:this.formLabelAlign.password,
        phone:this.formLabelAlign.phone
      }).then((res)=>{
        console.log(res.data)
        if (res.data.registerStatus ==="ok"){
          let token = res.data.token
          let username =res.data.username
          let phone =res.data.phone
          // let username
          localStorage.setItem("token",token)
          localStorage.setItem("username",username)
          localStorage.setItem("phone",phone)
          this.$store.commit("SaveUserInfo",res.data)
          console.log(this.$store.getters.getUserInfo);
          this.$router.replace("/")
          this.$message.success("登录成功！")
        }else {
          if (res.data.msg==="账号已经被注册！"){
            this.$message.error("账号已被注册！")
          }else if (res.data.msg==="手机号已经被注册！"){
            this.$message.error("手机号已被注册！")
          }else{
            this.$message.error("服务器出错！")
          }
        }

      })
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
  top: 25%;
  width: 20%;
  height: 50%;
  text-align: center;
}
.username-input,.password-input{
  margin: 10px 0px;
}

.submit{
  display: flex;
  justify-content: space-around;
}
.register{
  margin-top: 10px;
  width: 100%;
}
.gotologin{
  margin-top: 4px;
  font-size: 12px;
  color: #919191;
}
.gotologin a{
  text-decoration: none;
  color: #6547DB;
}




</style>
<template>
  <div class="profile">
    <div class="nickName">昵称：{{user.nickname}}</div>
    <div class="Gender">性别：{{user.gender===1?"男":"女"}}</div>
    <div class="userCount">账号：{{user.username}}</div>
    <div class="Age">年龄：{{user.age}}</div>
    <div class="Profile">简介：{{user.profile}}</div>
    <div class="Profile">手机号：{{user.phone}}</div>
  </div>


</template>

<script>


export default {
name: "profile",
  data() {
    return {
      user: {
        nickname:"",
        gender:"",
        username:"",
        age:0,
        profile:"",
        phone:"",
      }
    }
  },
  methods: {
    getUserInfo() {
      //刷新网页vuex数据会丢失，判断vuex是否有数据，如果没有去localStorage取数据。
      let username=this.$store.state.userInfo.username===undefined?localStorage.getItem("username"):this.$store.state.userInfo.username
      console.log("username:======",username);
      this.$ajax.post("http://localhost:8080/GetUserInfo",{
        username:username
      }).then((res)=>{
        console.log(res);
        let userInfo=res.data

        this.user.nickname=userInfo.nickname
        this.user.gender=userInfo.gender
        this.user.username=userInfo.username
        this.user.age=userInfo.age
        this.user.profile=userInfo.profile
        this.user.phone=userInfo.phone
        localStorage.setItem("userinfo",JSON.stringify(this.user))
      }).catch((err)=>{
        console.log("请求错误：",err);
      })
    }
  },
  mounted() {
  this.getUserInfo()
  }
}
</script>

<style scoped>

</style>
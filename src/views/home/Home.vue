<template>
  <div class="home">
    <el-container class="Container">
      <el-header class="Header">
        <div @click="logout" class="logout">退出登录</div>
      </el-header>
      <el-container>
        <el-aside class="Aside" width="100px">
          <div class="list">

          </div>
        </el-aside>
        <el-container>
          <el-main class="Main">
          <router-view/>



          </el-main>
<!--          <el-footer class="Footer">Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios"
import dialogLove from "@/views/wall/dialogLove/dialogLove";
export default {
  name: 'Home',
  components:{
    dialogLove,
  },
  data(){
    return{
      wallContentList:[]
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      this.$router.replace("/login")
      this.$message.success("退出登陆！")    //退出登录后，删除本地token，并跳转到login页面。
    }
  }
}
</script>
<style scoped>
  .Container{
    height: 100%;
  }
  .Header{
    background-color: palevioletred;
  }
  .Main{
    background-color: #42b983;
    position: relative;
  }
  .Aside{
    background-color: #5c6bc0;
    height: calc(100vh - 60px);
  }
  .Footer{
    background-color: aqua;
  }

</style>

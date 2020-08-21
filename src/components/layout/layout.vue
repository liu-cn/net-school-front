<template>
  <div class="home">
    <el-container class="Container">
      <el-header class="Header">
        <div @click="logout" class="logout">退出登录</div>
      </el-header>
      <el-container>
        <el-aside class="Aside" width="130px">
          <Menu/>
        </el-aside>
        <el-container>
          <el-main class="Main">
            <keep-alive>
              <router-view/>
            </keep-alive>

          </el-main>
          <!--          <el-footer class="Footer">Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios"
import Menu from "@/components/menu/Menu";
export default {
  name: 'layout',
  components:{
    Menu
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
      localStorage.removeItem("userinfo")
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
  background-color: white;
  box-shadow: 1px 1px 3px #E0DCDD;
  /*z-index: 10000;*/
  margin-bottom: 1px;
}
.Main{
  background-color: white;
  position: relative;
}
.Aside{
  background-color: #FAF0E6;
  height: calc(100vh - 60px);
}
.Footer{
  background-color: aqua;
}

</style>

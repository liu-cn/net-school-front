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

            <div class="content">
              <el-row class="one">
                <el-col :span="24">
                  <el-card class="box-card">
                    <div slot="header" class="clearfix">
                      <span>表白墙</span>
                      <el-button style="float: right; padding: 3px 0" @click="submit520()" type="text">表白</el-button>
                    </div>

                    <!--对话框-->
                    <dialog-love/>
                    <div v-for="(i,v) in wallContentList" :key="v" class="text item">
                      <el-alert
                              class="alert-item"
                              :title="i.Content"
                              type="success">
                      </el-alert>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
            <div class="right">

            </div>

          </el-main>
          <el-footer class="Footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from "axios"
import dialogLove from "@/views/home/dialogLove/dialogLove";
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
  methods:{
    logout(){
      localStorage.removeItem("token")
      localStorage.removeItem("username")
      this.$router.replace("/login")
      this.$message.success("退出登陆！")    //退出登录后，删除本地token，并跳转到login页面。
    },
    submit520(){
      // this.centerDialogVisible = true
      this.$bus.$emit("submit520")
    },

  },
  mounted() {
    axios.post("http://localhost:8080/api/wall",{
      token:localStorage.getItem("token")
    }).then((res)=>{
      console.log(res);
      this.wallContentList=res.data.wallContentList
    })
    this.$emit("CommitOk",(commitData)=>{
      console.log(commitData)
    })
  },
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
  .list{
    height: 100%;
  }
  .alert-item{
    margin: 10px 0px;
    box-shadow: 0px 0px 8px #333333;
  }
  .content{
    width: 80%;
  }
  .right{
    position: absolute;
    top: 10px;
    right: 0px;
    bottom: 0px;
    width: 15%;
    background-color: #FFCC99;
  }
</style>

<template>
  <div class="wall">
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
    <div @click='$router.replace("/profile")'>我的</div>
  </div>
  </div>
</template>

<script>
import dialogLove from "./dialogLove/dialogLove";
import axios from "axios";

export default {
  name: "wall",
  components:{
    dialogLove,
  },
  data(){
    return{
      wallContentList:[]
    }
  },
  methods:{
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
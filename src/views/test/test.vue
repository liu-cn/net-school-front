<template>
  <div>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(v,i) in imglist" :key="i">
<!--      <h3 class="medium">{{ item }}</h3>-->
      <img :src="v">
    </el-carousel-item>
  </el-carousel>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(v,i) in imglist" :key="i">
      <img :src="v">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  name: "test",
  data(){
    return{
      imglist:["https://pic.downk.cc/item/5f3fed43160a154a67fcfe72.jpg","https://pic.downk.cc/item/5f3fed61160a154a67fd0a92.jpg","https://pic.downk.cc/item/5f3fed72160a154a67fd10a6.jpg",
      "https://pic.downk.cc/item/5f3fed90160a154a67fd1bc0.jpg","https://pic.downk.cc/item/5f3feda3160a154a67fd2322.jpg","https://pic.downk.cc/item/5f3fedcf160a154a67fd3252.jpg"]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<template>
  <div @click="MenuClick" class="menu-item" :class="{isActive:isActive}"> <div class="wapper"><i :class="info.icon"></i> <span class="title">{{info.title}}</span></div></div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    info: {
      type:Object,
      default:{}
    },
  },
  data() {
    return {
      path: this.info.path
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.info.path)!==-1
    }
  },
  methods: {
    MenuClick() {
      if (!this.isActive){
        this.$router.replace(this.info.path)
      }
    }
  },
}
</script>

<style scoped>
.menu-item{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #FAF0E6;
}
.wapper{
  position: absolute;
  height: 20px;
  margin-left: 13px;
  top: calc(50% - 10px);
}
.title{
  text-align: center;
}
.icon{
  text-align: center;
}
.isActive{
  height: 100%;
  width: 100%;
  position: relative;
  background-color: white;
}
.isActive .title{
  color: #1482f0;
}
.isActive .icon{
  color: #1482f0;
}

</style>
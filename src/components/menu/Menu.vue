<template>
  <div class="menu">
    <menu-item class="menu-item" v-for="(v,i) in MenuTitleList" :key="i" :info="v"></menu-item>
  </div>
</template>

<script>
import MenuItem from "./MenuItem"
export default {
name: "Menu",
  components: {MenuItem},
  data() {
    return {
      MenuTitleList: [{title:"首页",path:"/home",icon:"el-icon-s-home"},{title:"表白墙",path:"/wall",icon:"el-icon-document"},
        {title:"我的",path:"/profile",icon:"el-icon-user"}, {title:"投稿",path: "/publish",icon:"el-icon-date"},
        {title:"社区",path: "/community",icon:"el-icon-school"}, {title:"学习",path: "/study",icon:"el-icon-table-lamp"},
        {title:"作品",path:"/works",icon:"el-icon-tickets"},{title:"测试",path:"/test",icon:"el-icon-warning-outline"},
        {title:"校友圈",path: "/friends",icon:"el-icon-mobile"}]
    }
  },
}
</script>

<style scoped>
.menu{
  width: 100%;
}
.menu-item{
  width: 100%;
  height: 50px;
}
</style>
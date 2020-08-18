<template>
  <el-dialog
      title="表白"
      :visible.sync="centerDialogVisible"
      width="50%"
      center>
<!--    <span>请输入您要表白的话</span>-->
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="我想对Ta说">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="是否匿名">
        <el-switch v-model="form.IsPublic"></el-switch>
      </el-form-item>

    </el-form>
    <span slot="footer" class="dialog-footer">
            <el-button @click="cancel520">取 消</el-button>
            <el-button type="primary" @click="enter520">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
name: "dialogLove",
  data() {
    return {
      centerDialogVisible: false,//控制表白对话框是否显示
      form: {
        content:"",
        IsPublic:"",
      }
    }
  },
  mounted() {
    this.$bus.$on("submit520",()=>{
      this.centerDialogVisible=true
    })
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    enter520(){
      if (this.form.content === ""){
        this.$message.warning("请输入内容！")
        return
      }
      this.centerDialogVisible = false
      this.$ajax.post("http://localhost:8080/api/commitwall",{
        content:this.form.content,
        IsPublic:this.form.IsPublic==="true"?"是":"否",
        username:localStorage.getItem("username")
      }).then((res)=>{
        let data=res.data
        console.log(data)
        if (data.CommitStatus === "ok"){
          this.$emit("CommitOk",this.form)
          this.$message.success("表白成功!")
        }
      })
      console.log(this.form);
    },
    cancel520(){
      this.centerDialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>
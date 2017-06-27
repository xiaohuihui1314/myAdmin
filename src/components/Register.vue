<template>
  <section>
    <h1>欢迎注册</h1>
    <div class="login-wrap">
      <el-input v-model="user.userName" placeholder="请输入内容"></el-input>
      <el-input v-model="user.passWord" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="login">注册</el-button>
      <router-link to="/">登录</router-link>
    </div>
  </section>
</template>
<style lang="scss">
  @import '../style/Login.scss';
</style>
<script>
  export default{
    data() {
      return {
        user: {
          userName: "",
          passWord: ""
        }
      }
    },
    methods: {
      async login(){
        const startRegister = (dataObj) => fetch ('POST', '/register', dataObj);
        let res = await  startRegister(this.user);
        if (res.userName) {
          this.$router.push({path: '/'});

        }
      }
    }
  }
</script>

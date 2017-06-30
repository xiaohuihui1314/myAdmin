<template>
  <section>
    <!--<h1>欢迎登录</h1>-->
    <div class="login-wrap">
      <el-input v-model="user.userName" placeholder="请输入用户名"></el-input>
      <el-input v-model="user.passWord" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="login">登录</el-button>
      <router-link to="/register">注册</router-link>
    </div>
  </section>
</template>
<style lang="scss">
  @import '../../style/Login.scss';
  body{
    width: 100%;
  }
</style>
<script>
  export default{
    data() {
      return {
        seen:true
      }
    },
    mounted(){
      (async() => {
        let bb = () => this.asyncLocalStorage();
        let res = await bb();
        if(res){
            console.log(res);
            localStorage.setItem("token",JSON.stringify(res.data))
        }
      })();
    },
    methods: {
      async login(){
        const checkLogin = (dataObj) => this.fetch('POST', '/login', dataObj);
        let res = await  checkLogin(this.user);
        console.log(res);
        if (res.id) {
          localStorage.setItem("token", JSON.stringify(res));
          this.$router.push({path: 'index'});
        }
      }
    }
  }
</script>

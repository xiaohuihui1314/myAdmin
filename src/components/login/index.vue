<template>
  <section>
    <!--<h1>欢迎登录</h1>-->
    <div class="login-wrap">
      <!--<el-input v-model="user.userName" placeholder="请输入用户名"></el-input>-->
      <!--<el-input v-model="user.passWord" placeholder="请输入密码"></el-input>-->
      <el-button type="primary" @click="login">1</el-button>
      <!--<router-link to="/register">注册</router-link>-->
    </div>
  </section>
</template>
<style lang="scss">
  @import '../../style/Login.scss';
</style>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default{
    data() {
      return {
        oldObj: {
          a: 1,
          b: 2,
          c: 3,
          d: {
            a: 1,
            b: 2,
            c11: {
              a: 1,
              b11: {
                a11: 1
              }
            }
          },
          e: [1, 2, 3, {a: 100}]
        },
        user: {
          userName: "11",
          passWord: "11"
        },
        json: [
          {
            name: 1,
            array: [
              {
                name: 1,
                array: []
              },
              {
                name: 2,
                array: []
              },
              {
                name: 3,
                array: []
              }
            ]
          },
          {
            name: 2,
            array: [
              {
                name: 1,
                array: []
              },
              {
                name: 2,
                array: []
              },
              {
                name: 3,
                array: []
              }
            ]
          },
          {
            name: 3,
            array: [
              {
                name: 1,
                array: []
              },
              {
                name: 2,
                array: []
              },
              {
                name: 3,
                array: []
              }
            ]
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        headerData: 'headerData'
      })
    },
    mounted(){
      this.index = this.headerData.index;
      this.oldObj.a = 999;
      (async() => {
        let bb = () => this.asyncLocalStorage();
        let res = await bb();
        if(res){
            console.log(res);
            localStorage.setItem("token",JSON.stringify(res.data))
        }
      })();
    },
    watch: {
      'headerData.index'(val) {
        console.log(this.headerData);
        console.log(val)
      }
    },
    methods: {
      async login(){
        const checkLogin = (dataObj) => this.fetch('POST', '/login', dataObj);
        let res = await  checkLogin(this.user);
        console.log(res);
        if (res.id) {
          localStorage.setItem("token", JSON.stringify(res));
          this.$router.push({path: 'hello'});
        }
      }
    }
  }
</script>

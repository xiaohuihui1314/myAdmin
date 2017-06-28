<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/address">地址</router-link>
      </li>
      <li>
        <router-link to="/friends">好友</router-link>
      </li>
      <li>
        <router-link to="/upload">upload</router-link>
      </li>
      <li>
        <router-link to="/socket">聊天室</router-link>
      </li>
      <li>
        <button type="button" @click="checkToken">验证token</button>
      </li>
    </ul>
    <section>
      <h2>用户列表</h2>
      <div v-for="user in users" :key="user" class="text item">
        {{'列表内容 ' + user.userName }}
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to You',
        users: []
      }
    },
    mounted(){
      this.userList();
      this.addressList();
      this.getUserAddress();
      this.getAllFriend();
    },
    methods: {
      async checkToken(){
        var checkData = fetch('http://localhost:3000/checkToken', {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": localStorage.getItem("token")
          }
        });
        let res = await checkData;
        console.log(res)
      },
      async userList(){
        const userFetch = () => this.fetch('get', '/userList');
        let res = await  userFetch();
        this.users = res;
        console.log(res);

      },
      async addressList(){
        const addressFetch = () => this.fetch('get', '/addressList');
        let res = await  addressFetch();
        console.log(res);

      },
      async getUserAddress(){
        const getUserAddressFetch = () => this.fetch('get', '/getUserAddress?id=' + JSON.parse(localStorage.getItem("token")).id);
        let res = await  getUserAddressFetch();
        console.log(res);

      },
      async getAllFriend(){
        const getAllFriendFetch = () => this.fetch('get', '/getAllFriend');
        let res = await  getAllFriendFetch();
        console.log(res);

      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>

<template>
  <div class="hello">
    <v-header/>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col class="car-col"
              :xs="24" :sm="8" :lg="6"
              v-for="(card, index) in cardList"
              :key="index">
        <div class="car-col" :style="{backgroundImage: 'url(' + card.img + ')',padding: '0px' }">
          <router-link :to="card.router" style="padding: 0">
            <span>{{card.name}}</span>
          </router-link>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import header from '../components/Header'
  import userDetails from '../assets/images/home/userDetails.jpg';
  import address from '../assets/images/home/address.png';
  import friend from '../assets/images/home/friend.jpg';
  import socket from '../assets/images/home/socket.png';
  export default {
    name: 'hello',
    data () {
      return {
        users: [],
        cardList: [
          {
            router: "/userDetails",
            img: userDetails,
            name: "个人信息"
          },
          {
            router: "/address",
            img: address,
            name: "地址"
          },
          {
            router: "/friends",
            img: friend,
            name: "好友"
          },
          {
            router: "/socket",
            img: socket,
            name: "聊天室"
          }
        ],
        currentDate: new Date()
      }
    },
    mounted(){
      this.userList();
      this.addressList();
//      this.getUserAddress();
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
    },
    components: {
      'v-header': header
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .car-col {
    padding: 25px;
    margin-bottom: 25px;
  }

  .car-col {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .car-col a {
    position: relative;
    display: block;
    height: 260px;
  }

  .car-col span {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: 38px;
    background-color: rgba(0, 0, 0, 0.48);
    font-size: 18x;
    color: #fff;
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

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

<template>
  <div>
    <h5>hello</h5>
    <section>
      <p>当前在线人数：{{userNumber}}</p>
      <p>系统通知：{{newUser}}</p>
    </section>
  </div>
</template>
<script>
  import io from 'socket.io-client';

  export default{
    data(){
      return {
        userNumber: 0,
        newUser: null
      }
    },
    mounted(){
      const httpServer = io.connect('http://localhost:3000');
      const token = JSON.parse(localStorage.getItem("token"));
      httpServer.emit("user in", token.userName);

      httpServer.on("chat message", msg => {
        console.log(msg)
        this.userNumber = msg.userNumber;
        this.newUser = msg.newUser;
      });
      httpServer.on("user out", msg => {
        this.userNumber = msg.userNumber;
        this.newUser = msg.outMessage;
        console.log(msg)
      });
    },

  }
</script>

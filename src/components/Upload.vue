<template>
  <section>
    <h2>{{title}}</h2>
    <input type="file" @change="uploadPicture" id="file">
    <h2>
      <a href="javascript:;" @click="downloadFile">下载</a>
    </h2>
  </section>
</template>
<script>
  export default {
    data(){
      return {
        title: "上传"
      }
    },
    methods: {
      downloadFile(){
//        fetch('http://192.168.0.124:3000/download').then(function (response) {
//          let reader = response.body.getReader();
//          let bytesReceived = 0;
//          reader.read().then(function processResult(result) {
//            if (result.done) {
//              console.log("Fetch complete");
//              return;
//            }
//            bytesReceived += result.value.length;
//            console.log(`接收 ${bytesReceived} bytes`);
//            return reader.read().then(processResult);
//          });
//        });
      },
      async  uploadPicture(){
        let input = document.querySelector('#file');
        let data = new FormData();
        data.append('file', input.files[0]);
//        const res = await  fetch('http://192.168.0.124:3000/upload', {
//          method: 'POST',
////            credentials: 'include',
//          body: data,
//        });
//        const resData = await res.json();
        fetch('http://192.168.0.124:3000/upload', {
          method: 'POST',
//            credentials: 'include',
          body: data,
        }).then(function (res, done) {
          processBodyChunkwiseWithProgress(res)
          function processBodyChunkwiseWithProgress(res) {
            fireProgress("loadstart");
            console.log(121);
            pump();
            function pump() {
              let reader =res.body.getReader();
              return reader.read().then(({value, done}) => {
                if (done) {
                  fireProgress();
                  fireProgress("load");
                  fireProgress("loadend");
                  return;
                }else {
                    console.log(888)
                }
                return pump();
              })
                .catch(() => {
                  fireProgress("error");
                  fireProgress("loadend");
                });
            }

            function fireProgress(name = "progress") {
                console.log(name)
                console.log(988)
            }
          }
        });
      }

    }
  }
</script>

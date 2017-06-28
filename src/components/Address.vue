<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="省">
      <el-select v-model="formInline.province" placeholder="请选择省">
        <el-option v-for="province in address.province" :label="province.name" :value="province.name"></el-option>
      </el-select>
      <el-select v-model="formInline.city" placeholder="请选择市">
        <el-option v-for="city in address.city" :label="city.name" :value="city.name"></el-option>
      </el-select>
      <el-select v-model="formInline.address" placeholder="请选择市">
        <el-option v-for="address in address.address" :label="address.name" :value="address.name"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onSubmit">新增</el-button>
  </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        address: {
          province: [
            {
              name: "北京"
            }, {
              name: "上海"
            }, {
              name: "广东"
            }, {
              name: "湖北"
            },
          ],
          city: [
            {
              name: "北京"
            }, {
              name: "上海"
            }, {
              name: "深圳"
            }, {
              name: "武汉"
            },
          ],
          address: [
            {
              name: "1"
            }, {
              name: "2"
            }, {
              name: "3"
            }, {
              name: "4"
            },
          ]
        },
        formInline: {
          province: null,
          city: null,
          address: null
        }
      };
    },
    methods: {
      async  onSubmit(){
          console.log(this.formInline)
        const checkLogin = (dataObj) => this.fetch('POST', '/createAddress', dataObj);
        const addressObj=this.unbound(this.formInline);
        addressObj.userId=JSON.parse(localStorage.getItem("token")).id;
        let res = await  checkLogin(addressObj);
        console.log(res);
//        if (res.id) {
//          localStorage.setItem("token", JSON.stringify(res));
//          this.$router.push({path: 'hello'});
//        }
      }
    }
  }
</script>

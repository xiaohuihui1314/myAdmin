<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="同户名">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作" >
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
      </el-table-column>
    </el-table>
</template>
<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted(){
      this.userList();
    },
    methods: {
      async  onSubmit(){
        console.log(this.formInline);
        const checkLogin = (dataObj) => this.fetch('POST', '/createAddress', dataObj);
        const addressObj = this.unbound(this.formInline);
        addressObj.user = JSON.parse(localStorage.getItem("token")).id;
        let res = await  checkLogin(addressObj);
      },
      async userList(){
        const userFetch = () => this.fetch('get', '/userList');
        let res = await  userFetch();
        this.tableData=res;

      },
    }
  }
</script>

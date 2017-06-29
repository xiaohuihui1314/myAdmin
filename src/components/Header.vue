<template>
  <section id="header">
    <el-button type="text"  @click="header1">点击</el-button>
  </section>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {}
    },
    computed: mapGetters({
      headerData: 'headerData'
    }),
    methods: {
      header1(){
        this.headerData.index = this.headerData.index + 1;
        this.$store.commit('clickHeader', this.headerData.index);
      }
    }
  }
</script>
<style>
  #header{
    line-height: 60px;
    background-color: #8ac9ff;
  }
</style>

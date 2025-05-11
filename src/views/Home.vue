<!--Home.vue-->
<template>
  <el-table :data="data.info">
    <el-table-column prop="id" label="编号" width="100"/>
    <el-table-column prop="account" label="账号" width="150"/>
    <el-table-column prop="side" label="业务" width="100"/>
    <el-table-column prop="amount" label="金额" width="150"/>
    <el-table-column prop="rule" label="触发规则" width="200"/>
    <el-table-column prop="content" label="报警内容" width="500"/>
  </el-table>
</template>
<script setup>
  import {ref,reactive} from 'vue'
  import axios from 'axios'
  const data=reactive({info: []});
  axios.get('/api/alert')
        .then(function(resp) {
                console.log(resp);
                data.info=resp.data;
        })
        .catch(function(error) {
                console.log(error);
        });
</script> 

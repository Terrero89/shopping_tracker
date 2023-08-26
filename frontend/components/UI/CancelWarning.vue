<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";

const open = () => {
  ElMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning",
      center: true,
    }
  ).then(() => {
    ElMessage({
      type: "success",
      message: "Delete completed",
    });
  });
};
</script>
<template>
  <el-button type="danger" @click="open">Cancel Reservation</el-button>
</template>

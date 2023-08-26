<script lang="ts" setup>
import { ref } from "vue";

defineProps(['timeInput'])
defineEmits(['update:timeInput'])


const timeInput = ref(""); //testing time picker
</script>

<template>
  <!-- just the date picker in this component -->

  <div >
    <div class="block">
      
     
    </div> 
    <!-- just the time picker will be in another component-->
    <!-- <el-time-select
      v-model="timeInput"
      start="10:00"
      step="01:30"
      end="20:30"
      placeholder="Select time"
      format="hh:mm A"
    /> -->
  </div>
</template>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
